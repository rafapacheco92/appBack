import Sequelize from "sequelize"

const Connection = new Sequelize(
  'backend',
  'admin',
  '123456',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

export default Connection