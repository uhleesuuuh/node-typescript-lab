import { Model, Sequelize, DataTypes } from 'sequelize';
import { EmployeesAttributes } from '../attributes';

class Employees extends Model implements EmployeesAttributes {
    public EmpID!: string;
    public EFirstName!: string;
    public ELastName!: string;
    public Address!: string;
    public Age!: number;
    public D_Join!: Date;
    public Dept!: string;
    public Salary!: number;

    static initModel(sequelize: Sequelize): void {
        Employees.init(
            {
                EmpID: {
                    field: 'EmpID',
                    type: DataTypes.STRING,
                    primaryKey: true,
                    // autoIncrement: true,
                },
                EFirstName: {
                    field: 'EFirstName',
                    type: DataTypes.STRING,
                },
                ELastName: {
                    field: 'ELastName',
                    type: DataTypes.STRING,
                },
                Address: {
                    type: DataTypes.STRING,
                },
                Age: {
                    type: DataTypes.INTEGER,
                },
                D_Join: {
                    field: 'D_Join',
                    type: DataTypes.DATE,
                },
                Dept: {
                    field: 'Dept',
                    type: DataTypes.STRING,
                },
                Salary: {
                    type: DataTypes.DOUBLE,
                },
            },
            {
                sequelize,
                underscored: true,
                tableName: 'Employees',
                timestamps: false,
            }
        );
    }
}

export default Employees;
