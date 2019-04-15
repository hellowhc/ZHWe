var gulp = require("gulp");
var imagemin = require("gulp-imagemin")
var htmlclean = require("gulp-htmlclean");
var uglify = require("gulp-uglify");
var stripDebug = require("gulp-strip-debug");
var concat = require("gulp-concat");
var deporder = require("gulp-deporder");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var connect = require("gulp-connect");


var folder = {
    src: "src/",
    dist: "dist/"
}

//流操作 task running
gulp.task("html1", function () {
    var page = gulp.src(folder.src + "page/*")
        .pipe(connect.reload());

    page.pipe(htmlclean());
    page.pipe(gulp.dest(folder.dist + "page/"))
})

gulp.task("html", function () {
    var page = gulp.src(folder.src + "index.html")
        .pipe(connect.reload());

    page.pipe(htmlclean());
    page.pipe(gulp.dest(folder.dist))
})

gulp.task("image", function () {
    gulp.src(folder.src + "image/*")
        .pipe(imagemin())
        .pipe(gulp.dest(folder.dist + "image/"))
})
gulp.task("js", function () {
    var js = gulp.src(folder.src + "js/nav/*")
        .pipe(connect.reload());
    // js.pipe(uglify())
    js.pipe(stripDebug())

    js.pipe(gulp.dest(folder.dist + "js/nav/"))
})
gulp.task("js1", function () {
    var js = gulp.src(folder.src + "js/cooperative/*")
        .pipe(connect.reload());
    // js.pipe(uglify())
    js.pipe(stripDebug())

    js.pipe(gulp.dest(folder.dist + "js/cooperative/"))
})
gulp.task("css", function () {
    var css = gulp.src(folder.src + "css/aboutus/*")
        .pipe(connect.reload())
        .pipe(less());
    var options = [autoprefixer()];
    options.push(cssnano())
    css.pipe(postcss(options))
        .pipe(gulp.dest(folder.dist + "css/aboutus/"))
})

gulp.task("css1", function () {
    var css = gulp.src(folder.src + "css/joinus/*")
        .pipe(connect.reload())
        .pipe(less());
    var options = [autoprefixer()];
    options.push(cssnano())
    css.pipe(postcss(options))
        .pipe(gulp.dest(folder.dist + "css/joinus/"))
})

gulp.task("css2", function () {
    var css = gulp.src(folder.src + "css/nav/*")
        .pipe(connect.reload())
        .pipe(less());
    var options = [autoprefixer()];
    options.push(cssnano())
    css.pipe(postcss(options))
        .pipe(gulp.dest(folder.dist + "css/nav/"))
})

gulp.task("css3", function () {
    var css = gulp.src(folder.src + "css/footer/*")
        .pipe(connect.reload())
        .pipe(less());
    var options = [autoprefixer()];
    options.push(cssnano())
    css.pipe(postcss(options))
        .pipe(gulp.dest(folder.dist + "css/footer/"))
})

gulp.task("css4", function () {
    var css = gulp.src(folder.src + "css/homePage/*")
        .pipe(connect.reload())
        .pipe(less());
    var options = [autoprefixer()];
    options.push(cssnano())
    css.pipe(postcss(options))
        .pipe(gulp.dest(folder.dist + "css/homePage/"))
})

gulp.task("css5", function () {
    var css = gulp.src(folder.src + "css/recruit/*")
        .pipe(connect.reload())
        .pipe(less());
    var options = [autoprefixer()];
    options.push(cssnano())
    css.pipe(postcss(options))
        .pipe(gulp.dest(folder.dist + "css/recruit/"))
})

gulp.task("css6", function () {
    var css = gulp.src(folder.src + "css/servCont/*")
        .pipe(connect.reload())
        .pipe(less());
    var options = [autoprefixer()];
    options.push(cssnano())
    css.pipe(postcss(options))
        .pipe(gulp.dest(folder.dist + "css/servCont/"))
})

gulp.task("watch", function () {
    gulp.watch(folder.src + "html/*", ["html"]);
    gulp.watch(folder.src + "image/*", ["image"]);

    gulp.watch(folder.src + "css/*", ["css"]);
})

gulp.task("server", function () {
    connect.server({
        port: "9999",
        livereload: true
    });
})

gulp.task("default", ["html", "html1","image","js","js1", "css", "watch", "server","css1","css2","css3","css4","css5","css6"]);