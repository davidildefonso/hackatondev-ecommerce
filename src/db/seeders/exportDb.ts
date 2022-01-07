import connection from "../conection";

const db =  connection().catch(console.dir);
console.log(db);
