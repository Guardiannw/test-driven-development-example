module.exports = function () {
    return {
      files: [
        'src/**/*.js',
        '!src/**/*.spec.js'
      ],
  
      tests: [
        'src/**/*.spec.js'
      ],

      testFramework: 'mocha',
  
      env: {
        type: 'node',
        runner: 'node'
      }
    };
  };