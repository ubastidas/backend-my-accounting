import colors from "colors";

import app from "./app";
import sequelize from  "../database/db";


async function main() {    
    try{
        await app.listen(app.get('port'));
        console.log(`Server on port ${app.get('port')}` .yellow);
        //await sequelize.authenticate(); Unicamente para acceder a la BD
        // Crea las tablas en la BD Force: True = DROP TABLES
        await sequelize.sync({ force: false });
        console.log("Connected to the database successfully" .yellow);
    }
    catch (error){
        console.log("an error occurred when starting the app:", error);
    }    
}

main();
