var express = require('express');
var router = express.Router();

var db = require('../../models');
var global = require('../../config/global');
var controlUser = require('../../controls/users');

/**
 * Método GET para crear usuarios
 */
router.get('/create', function (req, res, next) {
    console.log('(ROUTES.USER_CREATE.JS) Atendiendo la ruta /users/create GET');

    res.render('users/user_create', {
        pageTitle: 'Crear Usuario',
        pageName: 'user_create',
        sessionUser: null,
        errors: null,
        user: null
    })
});

/**
 * Método POST para crear usuarios
 */
router.post('/create', function (req, res, next) {
    console.log('(ROUTES.USER_CREATE.JS) Atendiendo la ruta /users/create POST');

    var user = db.User;
    user.nickname = req.body.nickname;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.birthdate = req.body.birthdate;
    user.email = req.body.email;
    user.isAuthenticated = true;
    user.picture = global.IMAG_USER_ANON;

    var pass = req.body.password;
    var pass1 = req.body.password1;

    if (pass === pass1) {
        user.password = controlUser.encryptPassword(pass);
    } else {
        user.password = '';
    }

    db.User.create(user).then(function (userNew) {
        res.redirect('/users/' + userNew.id + '/show');
    }).catch(function (errors) {
        res.render('users/user_create', {
            pageTitle: 'Crear Usuario',
            pageName: 'user_create',
            sessionUser: null,
            errors: errors,
            user: user
        })
    });
})

module.exports = router;