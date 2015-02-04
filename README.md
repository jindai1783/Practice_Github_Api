# Practice_Github_Api

## Tutorial

### Setting up Node server

First, we prepare our package.json file

```
npm init
npm install --save-dev mocha
npm install --save-dev chai
npm install --save-dev phantomjs
npm install --save-dev casperjs
npm install --save-dev mocha-casperjs
npm install --save-dev casper-chai
npm install --save-dev grunt
npm install --save-dev grunt-mocha-casperjs
```

At some point, you might want enter this command
```
git config core.autocrlf false
```

Then, we want to prepare our Gruntfile.js

```javascript
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {

      },
      files: {
        src: ['test/**/*']
      }
    }
  })
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.registerTask('default', ['mocha_casperjs']);
}
```

After that,