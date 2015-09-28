/**
 * Created by vz on 9/16/15.
 */

"use strict";

var gulp = require('gulp'),
    // open = require('gulp-open'), // opens a URL in a web browser
    connect = require('gulp-connect'), // runs a local dev server
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat'),
    lint = require('gulp-eslint');



var config = {
    port: 9005,
    devBaseUrl: 'http:localhost',
    paths: {
        html: 'src/*.html',
        js: ['src/**/*.js', 'src/**/*.jsx'],
        img: 'src/img/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.css'
        ],
        mainJs: 'src/main.jsx',
        dist: 'dist'
    }
};

// Start a local development server
gulp.task('connect', function(){
    connect.server({
        root: config.paths.dist,
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

//gulp.task('open', ['connect'], function(){
//   gulp.src(config.paths.dist + '/index.html')
//       .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
//});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
});

gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('img', function(){
    gulp.src(config.paths.img)
        .pipe(gulp.dest(config.paths.dist + '/img'));

    // publish favicon
    gulp.src('src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));

});

gulp.task('js', function(){
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('lint', function(){
    return gulp.src(config.paths.js)
        .pipe(lint({
            ecmaFeatures: { jsx: true },
            plugins: [ "react" ],
            env: { browser: true, node: true, jquery: true },
            rules: {
                "react/display-name": 1,
                "react/jsx-boolean-value": 1,
                "react/jsx-closing-bracket-location": 1,
                "react/jsx-curly-spacing": 1,
                "react/jsx-indent-props": 1,
                "react/jsx-max-props-per-line": 1,
                "react/jsx-no-duplicate-props": 1,
                "react/jsx-no-undef": 1,
                "react/jsx-quotes": 1,
                "react/jsx-sort-prop-types": 1,
                "react/jsx-sort-props": 1,
                "react/jsx-uses-react": 1,
                "react/jsx-uses-vars": 1,
                "react/no-danger": 1,
                "react/no-did-mount-set-state": 1,
                "react/no-did-update-set-state": 1,
                "react/no-multi-comp": 1,
                "react/no-set-state": 1,
                "react/no-unknown-property": 1,
                "react/prop-types": 1,
                "react/react-in-jsx-scope": 1,
                "react/require-extension": 1,
                "react/self-closing-comp": 1,
                "react/sort-comp": 1,
                "react/wrap-multilines": 1
            },
            globals: { $: true }
        }))
        .pipe(lint.format());
        //.pipe(lint.failOnError());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});


gulp.task('default', ['html', 'css', 'js','img', 'connect', 'watch']);
