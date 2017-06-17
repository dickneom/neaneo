/**
 * Modelo para la base de datos de las categorias de los vestidos
 */
module.exports = function (sequelize, DataTypes) {
    var Catego = sequelize.define('Catego', {
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        active: { type: DataTypes.BOOLEAN }
    }, {
            tableName: 'dresses-categos',
            underscored: true,
            timestamps: false,
            paranoid: false
        }
    );

    return Catego;
}