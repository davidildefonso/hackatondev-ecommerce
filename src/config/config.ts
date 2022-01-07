import dotenv from 'dotenv';
dotenv.config();

const config = {
  development: {
    username: process.env.MONGODB_DEV_USER,
    password: process.env.MONGODB_DEV_PASS,
    database: process.env.MONGODB_DEV_DATABASE,
  },
  test: {
    username: process.env.MONGODB_TEST_USER,
    password: process.env.MONGODB_TEST_PASS,
    database: process.env.MONGODB_TEST_DATABASE,
  },
  production: {
    username: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASS,
    database: process.env.MONGODB_DATABASE,
  },
};

export default process.env.NODE_ENV === 'DEVELOPMENT' 
	?  config.development :  
	process.env.NODE_ENV === 'TEST'  
		? config.test 
		: config.production;



