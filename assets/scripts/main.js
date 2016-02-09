"use strict";

var Author = new function(name){
  this.name = name || "Anonymous";
  this.articles = new Array();
}

Author.prototype.writeArticle = function(title){
  this.articles.push(title);
};

Author.prototype.listArticles = function(){
  return this.name + " has written: " + this.articles.join(", ");
};

exports.Author = Author;

var peter = new Author("Peter");
peter.writeArticle("A Beginners Guide to npm");
peter.writeArticle("Using npm as a build tool");
peter.listArticles();