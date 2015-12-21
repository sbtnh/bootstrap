module.exports = {
    dev: {
        bsFiles: {
            src : [
                '<%= cssDest %>/**/*.css',
                '<%= jsDest %>/**/*.js'
            ]
        },
        options: {
            server: {
              baseDir: "./"
            }
        }
    }
};