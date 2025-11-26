import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('ptcvote',
    'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
});

export { sequelize }