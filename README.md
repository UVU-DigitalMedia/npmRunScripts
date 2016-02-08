# npm Run Scripts
In this assignment we will be learning aobut build tools, like Gulp or Grunt, with a FOCUS on npm run scripts. :smile:

#Steps
1. Fork and clone the repo. See [the last assign](https://github.com/UVU-DigitalMedia/DGM3780-Assign1) for detailed steps.
2. Complete the assigned coding tasks
3. Submit Pull Request

# Assignment
For this assinment you will be adding a task to the npm run scripts. 

Inside the package.json file you will see a property called scripts. Here are all the run scripts. These are what tell npm what to automate.

For example:

````npm run watch````

This command will run the watch command and spinup a live server for testing.

To complete this assignment add one useful task to the npm run scripts.


#Tips
- As always, ````npm install```` :stuck_out_tongue:
- This assignment has no tests
- When you ````npm install (package)```` be sure to add the --save-dev flag. When you run the script, npm will first look there for the npm package. Then it will look for a global (computer wide) install. This way if you have a a dev dependendncy that only one package needs you don't need to install the package global, and all of your users don't have too.
- You can combine tasks too. See the package.json for examples.
- Some ideas for tasks: Image optimizer, js scripts ugllfiy and minify WITHOUT Browserify, css task without Stylus, Replace Stylus with Sass or Less, add Babel.js for ES6 goodness, add a templating language, like Handlebars,  add a task to convert .md files to HTML, add a testing framework like mocha or qunit. There are LOTS more!
