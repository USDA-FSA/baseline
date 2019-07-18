//
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLBeautifyPlugin = require('html-beautify-webpack-plugin');
const path = require('path');
//const fs = require('fs');
const recursive = require('recursive-readdir');

function addPages( dir ){

  const plugins = [];

  const addToPlugins = function( fn ){

    var fullPath = path.resolve(fn).replace(new RegExp('\\' + path.sep, 'g'), '/');
    var shortPath = fullPath.split('pages/')[1].split('.')[0];
    var splitPathArray = shortPath.split('/');
    var filename = splitPathArray.length > 1 ? splitPathArray[splitPathArray.length - 1] : shortPath;
    //
    var newTitle = filename;
    var newTemplate = dir + shortPath + '.hbs';
    var newFilename = path.resolve(__dirname, "./dist/" + shortPath +".html" );
    //var newFilename = "./dist/" + shortPath + ".html";
    //console.log( newTitle + ' - ' + newTemplate + ' - ' + newFilename);
    
    plugins.push(
      new HTMLWebpackPlugin(
        {
          "title" : newTitle,
          "template" : newTemplate,
          "filename" : newFilename,
          "inject" : "body"
        }
      )
    );

  };

  recursive( dir,
    function(err, files){
      
      files.map( addToPlugins ); 

      return plugins;
    }
  );

}

module.exports = {
  AddPages: addPages
}