/**
 * Modelo para generar to da la base de datos
 */
'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

console.log('(MODELS.INDEX.JS) config.use_env_variable: ', config.use_env_variable);
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
console.log(process.env[config.use_env_variable]);

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Relacion entre vestidos y usuarios
// Un Usuario tiene mucho vestidos
// Un vestido tiene un usuario
db.User.hasMany(db.Dress);
db.Dress.belongsTo(db.User);

// Relacion entre vestidos y marcas
db.Dress.belongsTo(db.Brand);

// Relacion entre vestidos y categorias
db.Dress.belongsTo(db.Catego);

// Relacion entre vestidos y colores
db.Dress.belongsTo(db.Color);

// Relacion entre vestidos y las fotos
db.Dress.hasMany(db.Photo);

// Relación entre vestidos y sus estados
db.Dress.belongsTo(db.State);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
