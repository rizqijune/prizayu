const plugin = require('tailwindcss/plugin');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  theme: {
    rotate: {},
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    addDynamicIconSelectors({scale: 0}),
    // Mozilla Support, read here : www.braydoncoyer.dev
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#8b5cf6",
          "secondary": "#001dff",
          "accent": "#b91c1c",
          "neutral": "#18181b",
          "base-100": "#e4e4e7",
          "info": "#0369a1",
          "success": "#15803d",
          "warning": "#c2410c",
          "error": "#be123c",
        },

        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#8b5cf6",
          "secondary": "#001dff",
          "accent": "#b91c1c",
          "neutral": "#18181b",
          "base-100": "#1f2937",
          "info": "#0369a1",
          "success": "#15803d",
          "warning": "#c2410c",
          "error": "#be123c",
        },
      },
    ],
    darkTheme: "dark",
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables default is :root
  },
  content: ['./templates/**/*.html.twig',],
  safelist: [
    'icon-[arcticons--unstoppable]',
    'icon-[arcticons--x-twitter]',
    'icon-[arcticons--github]',
    'hidden',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
}
