import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Vote extends Model {
  declare voteID: string;
  declare voteDatetime: Date;
  declare candidateID: string;

}

Vote.init(
  {
    voteID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    voteDatetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    candidateID: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  
    {
        tableName: 'vote',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
    
);

export { Vote }
