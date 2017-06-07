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
            tableName: 'dress',
            timestamps: true,
            paranoid: true,
            underscored: true,
            classMethods: {
                associate: function (models) {
                    Dress.belongsTo(models.User)
                }
            }
        });

    return Dress;
}