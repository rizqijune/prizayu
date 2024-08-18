# Prizayu for Grav

> **Warning: This theme is still at the development phase! But you can use this theme as a base feel free to fork and use it.**

## Preview

| ![Desktop](https://i.ibb.co.com/F8gYVTd/screenshot-rocks.png) | ![Mobile](https://i.ibb.co.com/9ZcMmwt/screenshot-rocks.jpg) |
| :----------------------------------------------------------: | ------------------------------------------------------------ |



based by grav theme [Tail](https://github.com/getgrav/grav-theme-tail)

## Features

* Multipurpose for small traffic site
* Made with [Tailwindcss](https://tailwindcss.com/) X [DaisyUI](https://daisyui.com)
* Fully responsive
* Multiple page template types
* ~~Matomo-Support~~
* Add additional links in drawer menu.

## Supported Page Templates

* Default view template `default.md`
* Error view template `error.md`
* Blog view template `post-list.md`
* Blog item view template `post.md`

There are templates for products. Product are currently a work in progress:
* Product view template `prods-list.md`
* Product item view template `prods.md`

## Supported Plugins

The following plugins have custom styling by this theme:

* [Markdown-Notices](https://github.com/getgrav/grav-plugin-markdown-notices)
* [Pagination](https://github.com/getgrav/grav-plugin-pagination)
* [Langswitcher](https://github.com/getgrav/grav-plugin-langswitcher)

See the [Optional Plugins](#optional-plugins) section for details and sample config snippets.

# Installation

Installing the Prizayu theme can be done in manual way. Because this theme is still work in progress. So we will not distribute it yet. But feel free to fork this!

## Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `prizayu`. You can find these files on [GitHub](https://github.com/rizqijune/prizayu).

You should now have all the theme files under

    /your/site/grav/user/themes/prizayu

# Site options

## Links (Beta)
You can add additional links to show at the drawer menu. Just go to the theme settings and add your links!

> You need to add the icons to the safelist at the tailwind.config.js before using it. We will tried to use another method in the future. But right now we will just using this method in the meantime.

# Style customizing
Most of the style can be customized by adapting the `class` attributes in the templates. This is the idea of tailwindcss's [Utility-First Approach](https://tailwindcss.com/docs/utility-first).

**Important**: The final css file is cleaned up with `postcss-purgecss` and minified by `cssnano`. Meaning: `postcss-purgecss` looks through your twig template files, recognizes which classes you used and then deletes all unused CSS from the final stylesheet. Then the sylesheet is minified using `cssnano`.

In case you're trying to add classes to the templates and nothing changes, it is possible that these classes aren't used anywhere else and therefore not present in the cleaned `main.css`.



# Optional Plugins

## Markdown-Notices

The [Markdown-Notices](https://github.com/getgrav/grav-plugin-markdown-notices) Plugin is supported 
and has custom styling. I suggest the following custom configuration for the plugin:

```
enabled: true
built_in_css: false
level_classes: [indigo, green, yellow, red]
```

Note `level_classes` being reordered and `blue` being replaced by `indigo`.

## Pagination

[Pagination](https://github.com/getgrav/grav-plugin-pagination) works out of the box and needs no further configuration.

## Langswitcher

The language switching template is included in the navbar as soon as the plugin
[Langswitcher](https://github.com/getgrav/grav-plugin-langswitcher)
is enabled and more than one language is available in the `languages.supported` 
array in the `system.yaml` config file.

For the exact behaviour and tweaking see `partials/langswitcher.html.twig`
