import colors from "colors";

import app from "./app";

async function main() {    
    await app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}` .yellow);    
}

main();