const gulp = require('gulp')
 
// import search index tasks
require('hugo-search-index/gulp')(gulp)
 
gulp.task('build', ['hugo-search-index'])
