import { User } from "../../types/User";
import { DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import {
  BaseParanoidModel,
  sequelizeInstance,
} from "../config/sequelizeInstance";

class UserModel
  extends BaseParanoidModel<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  >
  implements User
{
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare mobile: string;
  declare teamsId: string;
  declare username: string;
  declare displayName: string;
  declare photoUrl: string;
  declare role: number;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teamsId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
  },
  {
    sequelize: sequelizeInstance,
    tableName: "users",
    paranoid: true,
  }
);

export { UserModel };
