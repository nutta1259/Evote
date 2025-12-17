import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('momocafe',
    'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
});

export { sequelize }