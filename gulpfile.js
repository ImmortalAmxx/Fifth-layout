const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Завдання для компіляції SCSS в CSS
gulp.task('styles', function() {
  return gulp.src('scss/**/*.scss') // Вказати правильний шлях до SCSS файлів
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css')); // Вказати правильний шлях до вихідної папки
});

// Завдання для відслідковування змін
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series('styles'));
});

// Завдання за замовчуванням, яке запускає компіляцію та відслідковування
gulp.task('default', gulp.series('styles', 'watch'));
