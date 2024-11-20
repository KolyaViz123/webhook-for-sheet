import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Row extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    row_number: number; 

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    content: string
}