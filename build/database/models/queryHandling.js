"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class QueryHandling extends sequelize_1.Model {
    static initModel(sequelize) {
        QueryHandling.init({
            QID: {
                field: 'QID',
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
            },
            Sub_Date: {
                field: 'Sub_Date',
                type: sequelize_1.DataTypes.DATE,
            },
            Cust_ID: {
                field: 'Cust_ID',
                type: sequelize_1.DataTypes.STRING,
            },
            EmpID: {
                field: 'EmpID',
                type: sequelize_1.DataTypes.STRING,
            },
            Res_Date: {
                field: 'Res_Date',
                type: sequelize_1.DataTypes.DATE,
            },
            Status: {
                type: sequelize_1.DataTypes.STRING,
            },
            Feedback: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            Query_Text: {
                field: 'Query_Text',
                type: sequelize_1.DataTypes.STRING,
            },
            Query_Response: {
                field: 'Query_Response',
                type: sequelize_1.DataTypes.STRING,
            },
        }, {
            sequelize,
            underscored: true,
            tableName: 'QueryHandling',
            timestamps: false,
        });
        // QueryHandling.belongsTo(Employees, { foreignKey: 'EmpID' });
    }
}
exports.default = QueryHandling;
