import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Studentvote extends Model {
  declare studentID: string;
  declare studentvoteDate: Date;
  declare studentvoteStatus: string;

}

Studentvote.init(
  {
    studentID: {
      type: DataTypes.STRING(12),
      primaryKey: true,
      allowNull: false,
    },
    studentvoteDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    studentvoteStatus: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  
    {
        tableName: 'studentvote',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
    
);

export { Studentvote }
