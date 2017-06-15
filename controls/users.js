/**
/ Encripta el password, incluyendo una callback
*/
module.exports.encryptPassword = function encryptPassword(pass, cb) {
    console.log('(CONTROLS.USERS.JS) *** *** *** *** Encriptando password - callback');
    var encript = pass + 'a1';
    // falta el algoritmo de algoritmo de encriptamiento
    cb(encript);
};