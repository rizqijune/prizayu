const browserSync = require('browser-sync').create();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get the current working directory
const workingDir = process.cwd();

// Function to clean compiled CSS
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

// Function to compile CSS
function compileCSS() {
  return new Promise((resolve, reject) => {
    exec('pnpm compile', (err, stdout, stderr) => {
      if (err) {
        console.error(stderr);
        return reject(err);
      }
      console.log(stdout);
      resolve();
    });
  });
}

// Function to run precompile and compile
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
  files: path.join(workingDir, '**/*'),
  watch: true,
  serveStatic: [workingDir]
});

// Watch files and recompile CSS on change
browserSync.watch(path.join(workingDir, '**/*')).on('change', async (file) => {
  await precompileAndCompile();
  browserSync.reload();
});

// Initial run to compile CSS
precompileAndCompile();
