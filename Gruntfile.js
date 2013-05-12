/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "dist/index.html":"src/jade/index.jade"
        }
      }
    },
    stylus: {
      compile: {
        files: {
          'dist/styles.css': 'src/stylus/styles.styl' // 1:1 compile
        }
      }
    },
    uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'dist/app.min.js': ['src/js/app.js']
          }
        }
      },
    watch: {
      styles: {
        files: 'src/stylus/*.styl',
        tasks: ['stylus']
      },
      templates: {
        files: 'src/jade/*.jade',
        tasks: ['jade']
      },
      scripts: {
        files: 'src/js/*.js',
        tasks: ['uglify']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task.
  grunt.registerTask('default', ['jade', 'stylus', 'uglify']);

};
