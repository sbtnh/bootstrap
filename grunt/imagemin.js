module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: '<%= imgSrc %>',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: '<%= imgDest %>'
        }]
    }
};
