import { CreationOptional, Model, Sequelize } from 'sequelize';

export const sequelizeInstance = new Sequelize(
  'database',
  'username',
  'password',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

export class BaseModel<A extends {}, CA extends {}> extends Model<A, CA> {
  declare id: CreationOptional<number>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export class BaseParanoidModel<A extends {}, CA extends {}> extends BaseModel<
  A,
  CA
> {
  declare deletedAt: CreationOptional<Date>;
}
