module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: [ 'Gruntfile.js', 'js/jquery.jprefetch.js' ]
    },

    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*\n' +
                '<%= pkg.name %> - <%= pkg.version %> (latest commit @ <%= grunt.template.today("dd-mm-yyyy") %>)\n' +
                'Description: <%= pkg.description %>\n' +
                'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.maintainers.name %> (<%= pkg.maintainers.web %>)\n' +
                'licensed under the <%= pkg.licenses.name %> license (<%= pkg.licenses.url %>).\n' +
                '<%= pkg.repository.type %> repository - <%= pkg.repository.url %>\n' +
                '*/\n'
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