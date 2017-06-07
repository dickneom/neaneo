var express = require('express');
var router = express.Router();

var db = require('../../models');
var controlSession = require('../../controls/session');
var global = require('../../config/global');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // buscar los usuarios a presentar
    // Se debe considerar la cantidad de vestidos que se presentan por pagina
    // y el numero de la pagina a buscar
  // si no hay errores mostrar los usuarios
    // en la consola y en una pagina web

  var limit = req.query.limit;
  var page = req.query.page;
  var offset;
  
  if (!limit) {
    limit = global.USERS_FOR_PAGE;
  }
  if (!page) {
    page = 1;
  }

  offset = limit * (page - 1);

  console.log('(ROUTES.USERS.JS) limit: ', limit, ' page: ', page, ' offset: ', offset);
  db.User.findAll({
    limit: limit,
    offset: offset
  }).then(function (users) {
    console.log('(ROUTES.USERS.JS) Mostrando los usuarios encontrados');
    for (var user in users) {
      if (users.hasOwnProperty(user)) {
        console.log('user: ', users[user].id, users[user].name);
      }
    }

    res.render('users/users_list', {
      pageTitle: 'Usuarios',
      pageName: 'users',
      sessionUser: null,
      errors: null,
      users: users
    })
  }).catch(function (errors) {
    console.log('(ROUTES.USERS.JS) ERROR en la busqueda: ', errors );
    res.status('401').send('(ROUTES.USERS.JS) ERROR en la busqueda: ' + errors);
    //res.send('(ROUTES.USERS.JS) ERROR en la busqueda: ', errors);
  });
});

module.exports = router;
