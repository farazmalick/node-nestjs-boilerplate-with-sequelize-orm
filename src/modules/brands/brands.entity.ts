import { Table, Column, DataType, HasMany, Scopes, BelongsToMany, Model } from 'sequelize-typescript';
import { TABLE } from '@core/constants';

@Table({
  timestamps: true,
  tableName: TABLE.BRAND
})
export default class Brand extends Model<Brand>{
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  token: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  store_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  domain: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  province: string;

  @Column({
    type: DataType.STRING
  })
  address1: string;

  @Column({
    type: DataType.STRING
  })
  address2: string;

  @Column({
    type: DataType.TEXT
  })
  description: string;

  @Column({
    type: DataType.NUMBER
  })
  zip: number;

  @Column({
    type: DataType.STRING
  })
  phone: string;

  @Column({
    type: DataType.STRING
  })
  country_code: string;

  @Column({
    type: DataType.STRING
  })
  country_name: string;

  @Column({
    type: DataType.STRING
  })
  province_code: string;

  @Column({
    type: DataType.STRING
  })
  shop_domain: string;

  @Column({
    type: DataType.STRING
  })
  country: string;

}