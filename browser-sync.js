const browserSync = require('browser-sync').create();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const workingDir = process.cwd();

function cleanCompiledCSS() {
  return new Promise((resolve, reject) => {
    const directory = path.join(workingDir, 'css-compiled');
    fs.readdir(directory, (err, files) => {
      if (err) {
        return reject(err);
      }
      for (const file of files) {
        fs.unlink(path.join(directory, file), (err) => {
          if (err) {
            return reject(err);
          }
        });
      }
      resolve();
    });
  });
}

function compileCSS() {
  return new Promise((resolve, reject) => {
    exec('bun compile', (err, stdout, stderr) => {
      if (err) {
        console.error(stderr);
        return reject(err);
      }
      console.log(stdout);
      resolve();
    });
  });
}

async function precompileAndCompile() {
  try {
    await cleanCompiledCSS();
    await compileCSS();
  } catch (err) {
    console.error('Error during precompile and compile:', err);
  }
}

// Initialize BrowserSync
browserSync.init({
  proxy: '127.0.0.1',
  files: path.join(workingDir, 'templates/**/*'),
  watch: true,
  serveStatic: [workingDir]
});

browserSync.watch(path.join(workingDir, 'templates/**/*')).on('change', async (file) => {
  await precompileAndCompile();
  browserSync.reload();
});


precompileAndCompile();
