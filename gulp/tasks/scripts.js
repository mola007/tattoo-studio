const gulp = require('gulp'),
	  webpack = require('webpack');

      gulp.task('scripts', function(callback){ 
        webpack(require('../../webpack.config.js'),(err,status)=>{
        console.log('webpack');
        callback();

            if(err){
             console.log(err.toString())
            }
             console.log(status.toString());


        }); 
        });