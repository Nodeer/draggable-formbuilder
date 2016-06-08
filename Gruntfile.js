"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        dirs: {
            basePath : 'src/build',
            src : '<%= dirs.basePath %>/private/application',
            target : '<%= dirs.basePath %>/public'
        },

        clean: {
            build: {
                dot : true,
                src : [ '<%= dirs.basePath %>/**/*' ]
            }
        },

        copy: {
            application: {
                expand : true,
                cwd : 'src/main/webapp',
                src : [ '**' ],
                dest : "src/build/private"
            },
            fonts: {
                expand : true,
                cwd : 'src/build/private/application/fonts',
                src : [ '**' ],
                dest : "src/build/public/fonts"
            }
        },

        concat : {
            options : {
                separator : ";"
            },
            css : {
                src : ['<%= dirs.src %>/css/**/*.css'],
                dest : '<%= dirs.src %>/css/main.css'
            }
        },

        cssmin: {
            css : {
                src: '<%= dirs.src %>/css/main.css',
                dest: '<%= dirs.target %>/styles/webapp.css'
            }
        },

        requirejs:
        {
            compile:
            {
                options:
                {
                    mainConfigFile : "<%= dirs.src %>/js/bootloader.js",
                    baseUrl : '<%= dirs.src %>/js',
                    name    : "vendor/almond/almond",
                    almond  : true,
                    useStrict : true,
                    wrap      : true,
                    findNestedDependencies  : true,
                    preserveLicenseComments : false,
                    include : [ 'bootloader' ],
                    out     : "<%= dirs.target %>/js/webapp.js"
                }
            }
        },

        processhtml: {
            dist: {
                files: {
                    '<%= dirs.target %>/index.html' : ['<%= dirs.basePath %>/private/index.html']
                }
            }
        }

    });

    grunt.registerTask('default', [
        'prepare',
        'compile'
    ]);

    grunt.registerTask('prepare', [
        'clean',
        'copy:application'
    ]);

    grunt.registerTask('compile', [
        'requirejs',
        'concat:css',
        'cssmin',
        'processhtml',
        'copy:fonts'
    ]);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-processhtml');

};
