module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify:{
      caljs:{
        src:[
         'libs/fullcalendar/lib/moment.min.js',
         'libs/fullcalendar/lib/jquery.min.js',
         'libs/fullcalendar/fullcalendar.min.js',
        ],
        dest:'dist/cal.min.js',
      },
      formjs:{
        src:[
          'libs/jQuery.ptTimeSelect/src/jquery.ptTimeSelect.js',
          'libs/parsleyjs/dist/parsley.min.js'
        ],
        dest:"dist/form.min.js"
      },
      // ie:{
      //   src:['libs/nodep-date-input-polyfill.js'],
      //   dest:'dist/ie.js',
      // }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/cal.min.css': [
          'libs/fullcalendar/fullcalendar.css',
          'libs/jQuery.ptTimeSelect/src/jquery.ptTimeSelect.css',
          'libs/parsleyjs/src/parsley.css'
          ]
        }
      },
      targetPrint: {
        files: {
          'dist/cal.print.min.css': ['libs/fullcalendar/fullcalendar.print.css']
        }
      },
      // targetIE: {
      //   files: {
      //     'dist/ie.css': []
      //   }
      // }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin']);

};
