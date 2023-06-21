"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Employees extends sequelize_1.Model {
    static initModel(sequelize) {
        Employees.init({
            EmpID: {
                field: 'EmpID',
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                // autoIncrement: true,
            },
            EFirstName: {
                field: 'EFirstName',
                type: sequelize_1.DataTypes.STRING,
            },
            ELastName: {
                field: 'ELastName',
                type: sequelize_1.DataTypes.STRING,
            },
            Address: {
                type: sequelize_1.DataTypes.STRING,
            },
            Age: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            D_Join: {
                field: 'D_Join',
                type: sequelize_1.DataTypes.DATE,
            },
            Dept: {
                field: 'Dept',
                type: sequelize_1.DataTypes.STRING,
            },
            Salary: {
                type: sequelize_1.DataTypes.DOUBLE,
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'Employees',
            timestamps: false,
        });
    }
}
exports.default = Employees;
