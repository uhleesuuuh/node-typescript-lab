"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
    static initModel(sequelize) {
        Product.init({
            ProdID: {
                field: 'ProdID',
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
            },
            ProdName: {
                field: 'ProdName',
                type: sequelize_1.DataTypes.STRING,
            },
            Base_Cost: {
                field: 'Base_Cost',
                type: sequelize_1.DataTypes.DOUBLE,
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'Product',
            timestamps: false,
        });
    }
}
exports.default = Product;
