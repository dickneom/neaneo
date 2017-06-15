/**
 * Modelo para los usuarios del sistema
 * No considero los que se registran por redes sociales *************
 */
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        nickname: { type: DataTypes.STRING },
        firstname: { type: DataTypes.STRING },
        lastname: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING, unique: { args: true, msg: 'El email ya esta registrado.' } },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: { args: [6, 20], msg: 'La contraseña debe tener de 6 a 20 caracteres...' }
            }
        },
        birthdate: { type: DataTypes.DATEONLY },
        isAuthenticated: { type: DataTypes.BOOLEAN, field: 'is_authenticated', default: false },
        isAdmin: { type: DataTypes.BOOLEAN, field: 'is_admin', default: false },
        picture: { type: DataTypes.STRING }
    }, {
            tableName: 'users',
            timestamps: true,
            paranoid: true,
            underscored: true,
            getterMethods: {
                fullname: function () {
                    var firstname = this.getDataValues('firstname');
                    var lastname = this.getDataValues('lastname');
                    var fullname;
                    if (lastname) {
                        fullname = firstname + ' ' + lastname;
                    } else {
                        fullname = firstname + ' ' + lastname;
                    }
                    return fullname;
                }
            },
            classMethods: {
                associate: function (models) {
                    // Un usuario tiene muchos vestidos
                    User.hasMany(models.Dress);
                }
            }
        });

    return User;
}