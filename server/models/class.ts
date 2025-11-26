import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Class extends Model {
  declare classID: string;
  declare className: string;
  declare classAbbr: string;
  declare majorID: string;
  declare personnelID: number;
  declare personnelID2: number;
  declare year: number;
  declare areaName: string;
  declare majorName: string;
  declare classEnable: number;
}

Class.init(
  {
    classID: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      allowNull: false,
    },
    className: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    classAbbr: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    majorID: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    personnelID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    personnelID2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    areaName: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    majorName: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    classEnable: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    
  },
  
    {
        tableName: 'class',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
    
);

export { Class }
