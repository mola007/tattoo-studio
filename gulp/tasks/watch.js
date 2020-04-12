const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', 
function(){
    
browserSync.init({
notify: false,
server: {
baseDir: "app"
}
});
//zapoczątkuj html   
watch('./app/index.html', function(){
  browserSync.reload();
});

//zapoczątkuj css  
 watch('./app/assets/styles/**/*.css', 
  gulp.series('modernizr','styles', 'cssInject')
 );

// //zapoczątkuj js
 watch('./app/assets/scripts/**/*.js', gulp.series('scripts', 'scriptsRefresh'));
	
//
});

gulp.task('cssInject', function(){
  return gulp.src("./app/temp/styles/styles.css")
  .pipe(browserSync.stream());
 }); 

 gulp.task('scriptsRefresh', function(){
  browserSync.reload();
});

  
 gulp.task('watch');