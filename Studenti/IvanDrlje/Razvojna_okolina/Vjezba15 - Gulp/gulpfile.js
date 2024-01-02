const gulp = require('gulp');
//uključujemo gulp koji smo preko npm-a instalirali, i spremamo ga i varijablu!!!

const cssnano = require('gilp-cssnano');
//uključujemo i program koji smo isto instalirali cssnano!!! isto ga spremamo u varijablu

const sass = require('gulp-sass')(require('sass'));
//s ovim uključujemo gulp-sass ali i sami sass u ovakvom obliku kada radimo 
//2 uključivanja - NOVA SINTAKSA!!!

gulp.task('sass', function(){
   return gulp.src('style.scss').pipe(sass()).pipe(cssnano()).pipe(gilp.dest('dist'));
});


gulp.task('warch', function(){
   gulp.watch('*.scss', gulp.series('sass'));
})

gulp.task('default', gulp.series('sass', 'watch'));

//BLOKALA MI INSTALACIJA NA KORAKU ./NODE_MODULES/.BIN/GULP