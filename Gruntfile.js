module.exports = function(grunt) {
  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserSync: {
            bsFiles: {
                src: ['dist/css/*.css', '*.html', 'html/*.html' ]
                
            },
            
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },
        
        watch: {
            css: {
                files: ['css/style.css', '*.html','html/*.html'],
                tasks: ['cssmin', 'htmlmin']
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        },
        
        htmlmin: {                                       // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                          
                'dist/html/mot_oss.html': 'html/mot_oss.html',
                'dist/html/produkt_ITbase.html': 'html/produkt_ITbase.html',
                'dist/html/produkt_konsulent.html': 'html/produkt_konsulent.html',
                'dist/html/produkt_kortleser.html': 'html/produkt_kortleser.html',
                'dist/html/produkter.html': 'html/produkter.html',
                'dist/html/Referanser.html': 'html/Referanser.html',
                'dist/html/Sporsmaal.html': 'html/Sporsmaal.html'
              }
            },
            dev: {                                       // Another target
               files: [{
                   expand: true,
                   cwd: 'app',
                   src: ['html/*.html', '*.html'],
                   dest: 'dist/html'
               }]
            }
          },
        
        imagemin: {
            
            dynamic: {
                options:{
                    optimizationLevel: 3,
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,jpeg,gif}'],
                    dest: 'dist/bilder/'
                    /*im having some problems actualy optimizing the pictures, i do manage to get some optimization but just 3-4%, please give me some guidelines on how and why my current code do not work properly. 
                    */
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['imagemin', 'cssmin','htmlmin','browserSync', 'watch']);
}