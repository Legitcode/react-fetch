var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

  component: {
    name: 'react-fetch',
    dependencies: [
      'react'
    ],
    lib: 'build'
  },

  example: {
    src: 'example/src',
    dist: 'example/dist',
    files: [
      'index.html',
      '.gitignore'
    ],
    scripts: [
      'example.js'
    ]
  }

};

initGulpTasks(gulp, taskConfig);