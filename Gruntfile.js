module.exports = function(grunt) {
    var config = {
        banner: '<%= pkg.name %> - <%= pkg.version %>\n' +
        '<%= pkg.author.name %> - <%= pkg.author.url %>\n' +
        'Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %>',
        basePath: 'assets',
        cacheBreaker: '<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>',
        cssSrc: '<%= basePath %>/src/css',
        cssDest: '<%= basePath %>/dist/css',
        imgSrc: '<%= basePath %>/src/images',
        imgDest: '<%= basePath %>/dist/images',
        jsSrc: '<%= basePath %>/src/js',
        jsDest: '<%= basePath %>/dist/js',
        html: 'Views',
        port: '24547',
        pkg: grunt.file.readJSON('package.json')
    };

    require('load-grunt-config')(grunt, {
        data: config,
        loadGruntTasks: {
            config: require('./package.json'),
            pattern: 'grunt-*',
            scope: 'devDependencies'
        }
    });
};