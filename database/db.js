import { Sequelize }  from 'sequelize';
import { database } from "../config";

const sequelize = new Sequelize(
    database.database, 
    database.username,
    database.passeword,
    {
        host: database.host,
        dialect: 'mariadb',
        dialectOptions: {
            collate: 'utf8mb4_general_ci',
            useUTC: false,
            timezone: 'Etc/GMT0'
        },
        timezone: 'Etc/GMT0'
    }
);

export default sequelize;
