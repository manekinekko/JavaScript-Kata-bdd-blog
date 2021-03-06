JavaScript Kata: Let’s BDD a Blog
=================================

The goal of this Kata is to code a “Blog” using the principles of BDD.

1. The Specifications:
----------------------

__A Blog should have:__

  * a title of 20 chars. max and defaults to null. 
    * the title should be truncated by ‘...’ beyond 20 chars.
  * a creation date in timestamp and defaults to -1,
  * a valid URL that defaults to "",
  * an owner object whose attributes are:
    * a first name (mandatory),
    * a last name (mandatory),
    * a postal address (mandatory) object whose attributes are:
      * a city (mandatory),
      * a zip code (mandatory).
    * __this owner information might be retrieved from a remote JSON file!__
 * one or more articles.

__an Article should have:__

  * a title of 50 chars. max and defaults to null,
  * a creation date in timestamp and defaults to -1,
  * a status “published” or not which defaults to false,
  * zero or more comments.

__a Comment should have:__

  * an author object with the following attributes:
    * a nickname containing [a-z0-9-],
    * a valid email address,
    * a message ( __be careful about XSS__ ).

2. The tools:
-------------

In this Kata we’re using Sublime Text 2 (http://www.sublimetext.com/), “a sophisticated text editor for code, markup and prose. With a slick user interface, extraordinary features and amazing performance”, as our main editor. 
We are also using a Yeoman (http://yeoman.io/) which consists of “a robust and opinionated set of tools, libraries, and a workflow that can help developers quickly build beautiful, compelling web app”.


And for the test tools, we are using a JavaScript framework named Mocha (http://mochajs.org/) which is basically a test runner; in other words, this will allows us to run and execute our tests. These tests will be written using ChaiJS (http://chaijs.com/), a BDD/TDD assertion library for node and the browser that paires delightfully with Mocha.

__3) Project initialization:__

* Initialize a new project using Yeoman (from the command line) :

  `$ mkdir Blog && cd Blog && yeoman init (answer: n, n, Y for RequireJS, n, N)`


* Open the folder in Sublime Text 2: 

  `$ subl ./`

* Replace the content of __Gruntfile.js__ with the snippet gruntsample
* Replace the content of __test/index.html__ with the snippet mochaindex 
* Replace the content of __test/lib/chai.js__ with the lastest version of Chai https://raw.github.com/chaijs/chai/master/chai.js
* Replace the content of __app/scripts/main.js__ with the snippet requiremain
* Create the file __test/spec/blog.spec.js__ and add the snippet newspec
* Create a Model __app/scripts/Blog.js__ and add the snippet newblog
* Launch the test server using Yeoman:

  `$ yeoman server:test --force`

* Place Sublime Text 2 and your browser (opened by Yeoman) side by side for convenience sake. And get ready to write your specs..

4. Writing the specs:
---------------------

* Open the file __test/spec/blog.spec.js__ with Sublime Text 2,
* Update this file content and write your specs.

(TODO: add some examples)


LINCENSE
=======
JavaScript Kata Copyright 2012, Wassim Chegham Licensed under the MIT or GPL Version 2 licenses.

Copyright (C) 2013 by Wassim Chegham

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
