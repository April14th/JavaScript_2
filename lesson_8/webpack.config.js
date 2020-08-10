module.exports = {
    entry: './public/js/main.js',
    output: {
        filename: './build.js',
        path:'./dist'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
    }
}