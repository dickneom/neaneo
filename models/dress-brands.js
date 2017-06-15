/**
 * Modelo para la base de datos de las marcas de los veatidos
 */
module.exports = function(sequelize, DataTypes) {
    var Brand = sequelize.define('Brand', {
        brand: {type: DataTypes.STRING},
        active:  {type: DataTypes.BOOLEAN}
    }, {
        tableName: 'dresses-brands',
        underscored: true,
        timestamps: false,
        paranoid: false,
        classMethods: {
            associate: function (models) {
                // Una marca tiene  muchos vetidos
                Brand.hasMany(models.Dress)
            }
        }
    });

    return Brand;
}