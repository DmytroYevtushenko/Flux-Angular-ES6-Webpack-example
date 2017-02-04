module.exports = function karmaConfig(config) {
    config.set({
        frameworks: [
          'jasmine'
        ],

        reporters: [
          'progress'
        ],

        files: [
          'App/src/tests.webpack.js'
        ],

        preprocessors: {
            'App/src/tests.webpack.js': ['webpack', 'sourcemap']
        },

        browsers: [
          'PhantomJS'
        ],

        singleRun: true,
     
     
        webpack: require('./webpack.config'),
        webpackMiddleware: {
            noInfo: 'errors-only'
        }
    });
};
