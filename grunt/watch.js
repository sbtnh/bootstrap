module.exports = {
    options: {
        spawn: false
    },

    sass: {
        files: ['<%= cssSrc %>/**/*.scss'],
        tasks: ['buildCss']
    },

    images: {
        files: [
            '<%= imgSrc %>/**'
        ],
        tasks: [
            'imagemin'
        ]
    }
};
