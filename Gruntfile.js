module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: ['<%= sass.dev.src %>'],
        tasks: ['default']
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'app.js', 'routes/**/*.js', 'static/src/**/*.js']
    },
    sass: {
      dist: {
        options: {
          style: 'expand'
        },
        src: ['static/src/sass/style.sass'],
        dest: 'static/dev/css/style.css'
      }
    },
    bower: {
      install: {
        options: {
          targetDir: 'static/dev/lib',
          install: false,
          cleanTargetDir: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'sass', 'bower']);

};
