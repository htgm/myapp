const gulp = require('gulp');
const spawn = require('child_process').spawn;

let server;

gulp.task('server', () => {

  gulp.watch('src/*.js', ['server']);

  if (server) {
    server.kill('SIGKILL');
  }

  server = spawn('node', ['src/server.js'], { stdio: 'inherit' });

});
