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
    concat: {
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/app.js'
      }
    },
    uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'dist/app.min.js': ['dist/app.js']
          }
        }
      },
    watch: {
      styl: {
        files: 'src/stylus/*.styl',
        tasks: ['stylus']
      },
      css: {
        files: 'dist/styles.css',
        options: {
          livereload: true,
          // nospawn: true
        }
      },
      templates: {
        files: 'src/jade/*.jade',
        tasks: ['jade'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: 'src/js/*.js',
        tasks: ['concat','uglify'],
        options: {
          livereload: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task.
  grunt.registerTask('default', ['jade', 'stylus','concat', 'uglify']);

};
