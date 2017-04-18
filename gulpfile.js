var gulp = require( 'gulp' ), // Подключаем Gulp
    less = require( 'gulp-less' ), //Подключаем less пакет,
    browserSync = require( 'browser-sync' ), // Подключаем Browser Sync
    cleanCSS = require( 'gulp-clean-css' ); // подключаем минифатор
    // spritesmith = require( 'gulp.spritesmith' ); //Подключаем спрайт


gulp.task( 'less', function () { // Создаем таск less
    return gulp.src( 'app/less/style.less' ) // Берем источник
        .pipe( less() ) // Преобразуем less в CSS посредством gulp-less
        // .pipe( cleanCSS( {
        //     compatibility: 'ie8'
        // } ) ) //Минификация css перед выгрузкой
        .pipe( gulp.dest( 'app/css' ) ) // Выгружаем результата в папку app/css
        .pipe( browserSync.reload( {
            stream: true
        } ) );
} );

gulp.task( 'browser-sync', function () { // Создаем таск browser-sync
    browserSync( { // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    } );
} );

// gulp.task( 'sprite', function () {
//     var spriteData = gulp.src( 'app/img/icons/*.png' ).pipe( spritesmith( {
//         imgName: 'sprite.png',
//         cssName: 'sprite.css',
//         algoritm: 'binary-tree'
//     } ) );
//     spriteData.img.pipe( gulp.dest( 'dist/img/' ) );
//     spriteData.css.pipe( gulp.dest( 'dist/css/' ) );
// });

gulp.task( 'watch', ['browser-sync', 'less' ], function () {
    gulp.watch( 'app/less/**/*.less', [ 'less' ] ); // Наблюдение за less файлами в папке less
    gulp.watch( 'app/*.html', browserSync.reload ); // Наблюдение за HTML файлами в корне проекта
    gulp.watch( 'app/js/**/*.js', browserSync.reload ); // Наблюдение за JS файлами в папке js
} );
