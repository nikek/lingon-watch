'use strict';

var gulp = require('gulp');                 // for gulp.watch

module.exports = function(lingon, config) {
  if(!config) config = {};
  config.watchDir = config.watchDir || process.cwd() + '/' + lingon.config.sourcePath;
  config.watchDir += "/**/*";
  console.log(config.watchDir);

  var watchFn = function(callback) {
    gulp.task('default', function(){
      lingon.log("Go!");
      gulp.watch(config.watchDir, function(){
        lingon.log("Build triggered by watch");
        lingon.build({
          'callback': callback
        });
      });
    });
    gulp.start();
  };

  lingon.registerTask('watch', watchFn, {
    message: "Lingon watching " + config.watchDir + "."
  });
};
