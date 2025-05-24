SASS Watch command

sass --watch assets/sass/main.scss assets/css/main.css

<!-- With Prefix -->

sass --watch assets/sass/main.scss:assets/css/main.css && postcss assets/css/main.css --replace --use autoprefixer
