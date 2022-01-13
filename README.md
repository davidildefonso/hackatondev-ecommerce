# SIMPLE ECOMMERCE APP - PAINTINGS - MONGOATLAS- DEV- HACKATON

demo: https://polar-wave-18778.herokuapp.com/



## ✔️ Requirements

Node (versions `16.X.X` are tested,  other versions _might_ not work ) and npm. 

## 🚀 Getting started

1. Clone this repository and run `npm install` then  `npm update` (optional) in the directory

2.  Create a file `.env`  and copy the contents of the `.env.template` file there. In the `.env` file, replace the value of the environment variables accordingly.

- **PRODUCTION**

4. Run `npm run tsc:prod`  to build typescript to javascript.

5. **(Optional)** To populate the database in mongo atlas with some seed data you can run `npm run seed:production-initial`. **Note:** running this command will remove all existing data in the database name declared in .env file.

6. Run `npm run build:prod-ui` to get the build files of the front end

7. All done! Just run `npm start` to start the server. 


- **DEVELOPMENT**

8. Run `npm run tsc`  to build typescript to javascript.

9. **(Optional)** To populate the database in mongo atlas with some seed data you can run `npm run seed:initial`. **Note:** running this command will remove all existing data in the database name declared in .env file.

10.  **(Optional)**  Run `npm run build:ui` to get the build files of the front end in case only developing the backend server

12.  Run `npm run dev` to start the development server. 

11. Navigate to the fronend folder and run `npm install` then  `npm update` (optional) in the directory.

12.  Run `npm start` in the frontend folder to start the front end development server. 



