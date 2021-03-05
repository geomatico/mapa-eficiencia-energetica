const webpackConfig = require('./webpack.config')({
  test: true,
});

module.exports = (config) => {
  config.set({
    basePath: 'src',
    frameworks: ['mocha'],
    files: [
      'test.js',
    ],
    exclude: [],
    preprocessors: {
      'test.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['jsdom' /*, 'Chrome'*/],
    singleRun: true,
    concurrency: Infinity,
  });
};
