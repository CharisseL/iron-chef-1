'use strict';

function Recipe(o){
  this.name        = o.name.trim()  ? o.name  : 'Fake Recipe';
  this.photo       = o.photo.trim() ? o.photo : 'img/skin-healthy-food.jpg';
  this.directions  = o.directions.trim() ? o.directions : '1. Your mama is not here. 2. Learn to cook 3. ASAP';
  this.ingredients = o.ingredients.trim() ? o.ingredients.split(',').map(function(i){return i.trim();}) : ['Kush',' Wine','Jazz'];
  this.created     = new Date();
}


Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

Recipe.create = function(o, cb){
  var r = new Recipe(o);
  Recipe.collection.save(r, cb);
};

Recipe.all = function(cb){
  Recipe.collection.find().toArray(cb);
};


module.exports = Recipe;
