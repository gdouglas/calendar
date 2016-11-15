module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify:{
      js:{
        src:['libs/fullcalendar/lib/moment.min.js', 'libs/fullcalendar/lib/jquery.min.js','libs/fullcalendar/fullcalendar.min.js'],
        dest:'dist/cal.min.js',
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/cal.min.css': ['libs/fullcalendar/fullcalendar.css']
        }
      },
      targetPrint: {
        files: {
          'dist/cal.print.min.css': ['libs/fullcalendar/fullcalendar.print.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin']);

};