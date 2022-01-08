import { exec } from 'child_process';
import dotenv from 'dotenv';
dotenv.config();

exec(`mongorestore  --uri "mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.r0mb0.mongodb.net" --archive="./sample_database/ecommerce_sample.json" --nsFrom="sample_mflix.*" --nsTo="ecommerce_sample.*"` , (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
});



