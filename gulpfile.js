const gulp = require('gulp');
const spawn = require('child_process').spawn;

let server;

gulp.task('server', () => {

  if (server) {
    server.kill('SIGKILL');
  }
  else {
    gulp.watch('src/*.js', ['server']);
  }

  server = spawn('node', ['src/server.js'], { stdio: 'inherit' });

});
