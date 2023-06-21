import { Model, Sequelize, DataTypes, DATE } from 'sequelize';
import { QueryHandlingAttributes } from '../attributes';
import Employees from '../models/employees';

class QueryHandling extends Model implements QueryHandlingAttributes {
    public QID!: string;
    public Sub_Date!: Date;
    public Cust_ID!: string;
    public EmpID!: string;
    public Res_Date!: Date;
    public Status!: string;
    public Feedback!: number;
    public Query_Text!: string;
    public Query_Response!: string;

    static initModel(sequelize: Sequelize): void {
        QueryHandling.init(
            {
                QID: {
                    field: 'QID',
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                Sub_Date: {
                    field: 'Sub_Date',
                    type: DataTypes.DATE,
                },
                Cust_ID: {
                    field: 'Cust_ID',
                    type: DataTypes.STRING,
                },
                EmpID: {
                    field: 'EmpID',
                    type: DataTypes.STRING,
                },
                Res_Date: {
                    field: 'Res_Date',
                    type: DataTypes.DATE,
                },
                Status: {
                    type: DataTypes.STRING,
                },
                Feedback: {
                    type: DataTypes.INTEGER,
                },
                Query_Text: {
                    field: 'Query_Text',
                    type: DataTypes.STRING,
                },
                Query_Response: {
                    field: 'Query_Response',
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                underscored: true,
                tableName: 'QueryHandling',
                timestamps: false,
            }
        );
        // QueryHandling.belongsTo(Employees, { foreignKey: 'EmpID' });
    }
}

export default QueryHandling;
