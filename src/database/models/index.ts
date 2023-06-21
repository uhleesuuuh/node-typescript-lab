import SequelizeConnection from '../configuration';
// import Department from './department';
import Employees from './employees';
import Product from './product';
import QueryHandling from './queryHandling';

const sequelize = SequelizeConnection.getInstance();

// Initialize Models
// Department.initModel(sequelize);
Employees.initModel(sequelize);
Product.initModel(sequelize);
QueryHandling.initModel(sequelize);

export const db = {
    sequelize,
    // Department,
    Employees,
    Product,
    QueryHandling,
};
