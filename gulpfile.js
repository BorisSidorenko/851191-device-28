const gulp = require("gulp");
const sync = require("browser-sync").create();
const ghPages = require("gh-pages");
const path = require("path");

const server = (done) => {
    sync.init({
      server: {
        baseDir: './851191-device-28'
      },
      cors: true,
      notify: false,
      ui: false,
    });
    done();
  }

exports.server = server;

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './'), cb);
}

exports.deploy = deploy;
