/**
 * Moidelo para los vestidos
 */
module.exports = function (sequelize, DataTypes) {
    var Dress = sequelize.define('Dress', {
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        forRent: { type: DataTypes.BOOLEAN, field: 'for_rent'},
        priceForRent: { type: DataTypes.DECIMAL, field: 'price_for_rent' },
        forSale: { type: DataTypes.BOOLEAN, field: 'for_sale' },
        priceForSale: { type: DataTypes.DECIMAL, field: 'price_for_sale' },
        priceOriginal: { type: DataTypes.DECIMAL, field: 'price_original' },
    }, {
            tableName: 'dresses',
            timestamps: true,
            paranoid: true,
            underscored: true,
            classMethods: {
                associate: function (models) {
                    // Un vestido tiene un usuario
                    Dress.belongsTo(models.User)//,
                    // Un vestido tiene un color
                    //Dress.belongsTo(models.Color),
                    // Un vestido tiene una marca
                    //Dress.belongsTo(models.Brand)
                }
            }
        });

    return Dress;
}