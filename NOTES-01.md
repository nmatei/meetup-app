In this first video tutorial I will show you how to configure a minimal environment for React development

The only prerequisite is that you have nodejs installed. You can check that with `node -v` to make sure a recent version is installed on your machine.

As soon as you have that, let's create a project directory, "react-starter".

cd into it and run `npm init`. npm is the node package manager cli. The init command creates a package.json file describing our project. This file will also contain all your dependencies, both runtime and development dependencies.

At runtime, you will only need two packages, React and ReactDOM, so install them with `npm install react react-dom --save`. When you install node packages, they are downloaded and placed inside the node_modules directory. If you also use "--save", they are also listed into your package.json. This is very useful when working in a team, since your coworkers can just clone the project and run "npm install" to get all the depencies listed in package.json installed for them locally.

After installing React, let's create our first React component, and put it into an index.js file

You need to import React from the 'react' package. Then you define your app component, which is a React.Component with a render method. For now, simply return a div with Hello React, of course.

Then you have to render this first component somewhere in a webpage. For this, use the `render` function from the ReactDOM package, and render the <App /> inside a div with the id of "content".

We're done with our component, but notice we're using es2015 features like module "imports" and also jsx, which is not valid javascript browsers understand.

So you'll need to transpile the sources to javascript of today. For this you'll use babel.

 Generally you'll also need to bundle your app into a single file, and for this you can use webpack. In this video I'll use webpack-dev-server since it's targeted specifically for development environments.

 In order to configure babel, you need to create a .babelrc file, which is just a json file. Specify 2 presets, "es2015" and "react". Babel presets are just a set of rules that dictate which language features your codebase uses. The presets are node packages, prefixed with babel-preset. So we need to `npm i --save-dev babel-preset-es2015 babel-preset-react`.

 After installing babel, let's install webpack dev server. We run `npm i --save-dev webpack-dev-server@1.12`. After webpack is installed, you need to configure it, so let's create a dev.config.js file in the build directory. Your app entry point is `index.js` and you will want to transpile all files ending in .js with babel, so configure them to be parsed with the babel-loader. Exclude any files from /node_modules/. At this point, you have to install babel-loader as well, so just `npm i --save-dev babel-loader` to have to listed in devDepencendies in package.json.
Then you need to specify the publicPath and the filename from which webpack-dev-server serves your bundled app.

 The last thing we have to do is to create index.html and include the correct scripts.

 You're ready to go! Make sure you check this out at [https://github.com/zippyui/react-starter]
