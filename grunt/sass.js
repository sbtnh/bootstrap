module.exports = {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            '<%= cssDest %>/main.css': '<%= cssSrc %>/main.scss'
        }
    }
};
