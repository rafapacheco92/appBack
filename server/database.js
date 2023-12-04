import Sequelize from "sequelize"

const Connection = new Sequelize(
  'postgres://docker:docker@localhost:5432/banco'
)

export default Connection