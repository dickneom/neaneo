/**
 * Modelo para la base de datos de los colores de los vestidos
 */
module.exports = function (sequelize, DataTypes) {
    var Color = sequelize.define('Color', {
        color: { type: DataTypes.STRING },
        active: { type: DataTypes.BOOLEAN }
    }, {
            tableName: 'dresses-colors',
            underscored: true,
            timestamps: false,
            paranoid: false,
            classMethods: {
                associate: function (models) {
                    // Un color tiene muchos vestidos
                    // Color.hasMany(models.Dress)
                }
            }
        });

    return Color;
}