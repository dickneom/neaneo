/**
 * Modelo para la base de datos de las fotos de los vestidos
 */
module.exports = function (sequelize, DataTypes) {
    var Photo = sequelize.define('Photo', {
        photoUrl: { type: DataTypes.STRING, field: 'photo_url' },
        photo: { type: DataTypes.BLOB },
        description: { type: DataTypes.STRING }
    }, {
            tableName: 'dresses-categos',
            underscored: true,
            timestamps: false,
            paranoid: false,
            classMethods: {
                associate: function (models) {
                    // Una foto pertenece a un vestido
                    // Photo.belongsTo(models.Dress)
                }
            }
        });

    return Photo;
}