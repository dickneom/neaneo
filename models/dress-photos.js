/**
 * Modelo para la base de datos de las fotos de los vestidos
 */
module.exports = function (sequelize, DataTypes) {
    var Photo = sequelize.define('Photo', {
        photoUrl: { type: DataTypes.STRING, field: 'photo_url' },
        photo: { type: DataTypes.BLOB },
        description: { type: DataTypes.STRING }
    }, {
            tableName: 'dresses-photos',
            underscored: true,
            timestamps: true,
            paranoid: true
        }
    );

    return Photo;
}