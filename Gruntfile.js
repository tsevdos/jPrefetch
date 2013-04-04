module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: [ 'Gruntfile.js', 'js/**/*.js', 'specs/**/*.js' , 'tests/**/*.js' ]
    },

    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      my_target: {
        files: {
        'js/jquery.jprefetch.min.js': ['js/jquery.jprefetch.js' ]
        }
      }
    }

  });

  // Load the plugin that provides tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint' , 'uglify' ]);

};