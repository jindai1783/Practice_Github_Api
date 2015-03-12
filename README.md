# Practice GitHub API

<div id="table-of-contents">
## Table of Contents

1. [Introduction](#introduction)
1. [Tutorial](#tutorial)
  1. [Setting up test environment](#tutorial1)
  2. [Setting up the server using express](#tutorial2)
2. [API](#api)
  1. [Loading api from Github](#tutorial3)
3. [About JQuery](#about-jquery)

<div id="introduction">
## Introduction

This repository is a useful reference for building a Nodejs web server, and using external APIs.

<div id="tutorial">
## Tutorial

<div id="tutorial1">
### Setting up test environment

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

After that, we create a test folder, and write or first test file, something like this
```
mkdir test
```
```javascript
describe('homepage', function() {
  before(function() {
    casper.start('http://localhost:3000');
  });

  it('hello worlds', function() {
    casper.then(function() {
      expect("body").to.have.text("Hello World");
    });
  });
});
```

**[back to top](#table-of-contents)**

<div id="tutorial2">
### Setting up the server using express

We need to first install Express locally
```
npm install --save express
npm install --save ejs
```

Finally, we create our server file server.js. This is the controller, something like this.
```javascript
var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index', request.query);
});

```

Then, we want to create a views folder, and touch an entry point, index.ejs
```
mkdir views
touch index.ejs
```

**[back to top](#table-of-contents)**

<div id="api">
## API

Try putting this into the html request, and keep refreshing
```
https://api.github.com/zen
```

Also try to type this in your command line
```
curl https://api.github.com/zen
```

This is how api handles information input and output.

<div id="tutorial3">
### Loading api from Github

In the console, try to type. This will give you an Object which contains the responseJSON
```javascript
$.get('api.github.com/users/jindai1783')
```

If we implement this in the server, it will throw this error - server don't like to approach out.
```
Failed to load resource: the server responded with a status of 404 (Not Found)
```

Note, the server has port 3000. It will also work for other ports, but will not work at ports when that port is run elsewhere.

### Loading api from other sites

In the console, try to type. This will give you json that differs from the above one.
```javascript
$.get('api.github.com/')
```

<div id="about-jquery">
## About JQuery

What can JQuery do?

First, have a look at the [uncompressed JQuery file].

Also, compare the [life] with and without JQuery.

[uncompressed JQuery file]: http://code.jquery.com/jquery-1.11.2.js

[life]: http://youmightnotneedjquery.com

```javascript
$ === JQuery
1. convenient class methods ---> e.g. AJAX; $.get
//passing a string
2. $('.class') $() ---> window.document.findElementByClass('.class')
//passing a object
3. var x = window.document.findElementByClass('.class')[0] ---> $(x).on('click')
//passing a function
4. $(function() {})

e.g.
$('#username').val()
```

Without JQuery, we must use

```javascript
var oReq = new XMLHttpRequest();
oReq.onload = function() {
  console.log(this.responseText);
};
oReq.open("get", 'localhost:9999/users/tansaku', true);
oReq.send();
console.log(this.responseText);
```

With JQuery, this boil down to

```javascript
$.get('localhost:9999/users/tansaku', function() {
  console.log(this.responseText);
});
```

**[back to top](#table-of-contents)**