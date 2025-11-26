import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Candidate extends Model {
  declare candidateID: number;
  declare candidateName: string;
  declare candidateParty: string;
  declare candidateDetail: string;

}

Candidate.init(
  {
    candidateID: {
      type: DataTypes.TINYINT,
      primaryKey: true,
      allowNull: false,
    },
    candidateName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    candidateParty: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    candidateDetail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  
    {
        tableName: 'candidate',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
    
);

export { Candidate }
