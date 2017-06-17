/**
 * Modelo para la base de datos de los estados de los vestidos
 */
module.exports = function (sequelize, DataTypes) {
    var State = sequelize.define('State', {
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        active: { type: DataTypes.BOOLEAN }
    }, {
            tableName: 'dresses-states',
            underscored: true,
            timestamps: false,
            paranoid: false
        }
    );

    return State;
}