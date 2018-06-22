let mix = require('laravel-mix');

mix.copy('src/*.html', 'dist/')
   .copyDirectory('src/img', 'dist/img/')
   .copyDirectory('src/fonts', 'dist/fonts/')
   .copyDirectory('src/js/', 'dist/js/')
   .sass('src/scss/style.scss', 'dist/css/')
   .browserSync({
            proxy: "",
            server: "dist",
            files: ["dist/css/**/*.css", "dist/js/**/*.js", 'dist/*.html']
   })
   .options({
        processCssUrls: false
    })
   .setPublicPath('dist');