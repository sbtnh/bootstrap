module.exports = {
    main: {
        files: [
            {
                expand: true,
                cwd: '<%= basePath %>/src/',
                src: ['fonts/**', 'docs/*'],
                dest: '<%= basePath %>/dist/'
            }
        ]
    }
};
