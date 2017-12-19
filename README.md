# README

A simple chat implementation UI!

## What files live where

* `frontend_design_spec.md` has a copy of the information/requirements for this
  exercise.
* `backend_design_spec.md` should contain the spec for what you want the
  backend developer to build so that your frontend demo app would actually work
  someday. Once you have your app more or less working, you'll need to write
  this.
* `index.html` is your main HTML page. 
* Your JS code goes in `/j`s. There's an app.js file in there already to get
  you started. Any libraries you use as dependencies can go in `/libs` (if not
  linked via a CDN). Your index.html file already includes Twitter Bootstrap
  and JQuery, to start.
* Your stylesheets go in `/style`s. There's a `style.cs`s file in there already
  to get you started. If you'd like to use a CSS preprocessor like SCSS or
  LESS, great! Make sure to include the original SCSS/LESS file(s), not just
  compiled CSS, when you send your code back so we can see them.
* `/fixtures` contains a fake data file, `fakedata.json`, to help you get
  started.

If you'd rather organize your code differently, go for it. Just update this
README file accordingly.

## Viewing the app for development

If your computer has Python installed, an easy way to get this frontend-only
app up and running is to cd into this directory in your terminal window, then
run:

    python -m SimpleHTTPServer 8080

This will start a basic web server serving the contents of this directory on
your machine. You can then see index.html at localhost:8080.

If you'd rather serve your app for development in a different way, go for it.
