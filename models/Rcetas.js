const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recetaSchema = new Schema({
    title: {type: String, require: true, unique: true},
    level: {type: String, enum:['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']},
    ingredients: {type:Array},
    cuisine:{type:String, require: true},
    dishType:{type: String, enum:['Breakfast', 'Dish','Snack',  'Drink', 'Dessert', 'Other']},
    image:{type:String,default:'https://images.media-allrecipes.com/images/75131.jpg'},
    duration:{type:Number, min:0},
    creator:{type:String},
    created:{type:Date, default: Date.now}       
    
})
const Recetas = mongoose.model('Recetas', recetaSchema);
module.exports = Recetas;