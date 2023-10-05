import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'academy-up_development',
    username: 'postgres',
    password: 'postgres',
    define: {
        underscored: true
    }
})