# TrainAPI

# Stack

- [Node.js](https://nodejs.org/)
- GIT/GITHUB (code management)
- [ElephantSQL](https://www.elephantsql.com/) (PostgreSQL database)
- [Postman](https://www.postman.com/) (API testing)
- [Trello](https://trello.com) (project management)

# How to run locally

- System requirements: [Node.js](https://nodejs.org/)
- Fork the repository
- Clone it to your local repo
- Run "npm install" to install dependencies
    - "body-parser": "^1.19.0",
    - "cors": "^2.8.5",
    - "dotenv": "^8.2.0",
    - "express": "^4.17.1",
    - "nodemon": "^2.0.4",
    - "pg": "^8.3.3"
- Run "npm start" to run local server
- See .env.sample for environment variables

# Database (SQL Elephant)

Trains table:

| id                 | name         | length      | stopid                    | maintenance |
| ------------------ | ------------ | ----------- | ------------------------- | ------------|
| serial primary key | varchar(250) | integer(10) | integer(10) - foreign key | boolean     | 

Stops table:

| id                 | city         | 
| ------------------ | ------------ | 
| serial primary key | varchar(250) | 


# Features

| Endpoint                                           | Route                        |
| -------------------------------------------------- | ---------------------------- |
| GET (all trains)                                   | ("/trains")                  | 
| GET (specific train by id)                         | ("/trains/:id                |
| GET (all trains currently in maintenance)          | ("/trains/running            |
| PUT (send train to specific station)               | ("/trains/sendtostation/:id  |
| PUT (update specific train maintenance true/false) | ("/trains/:id                |
| GET (all stops)                                    | ("/stops")                   |
| GET (current stop for specific train)              | ("/stops/:id"                |
                                                

# Structure

| File                | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| server.js           | Server and endpoints (!main file)                                         |
| dbConfig.js         | Configuration of database (ElephantSQL)                                   |
| trainsRoutes.js     | Configuration of trains routes                                            |
| sopsRoutes.js       | Configuration of stops routes                                             |
| trainsController.js | Controllers for trains endpoints                                          |
| stopsController.js  | Controllers for stops endpoints                                           |
| logRequests.js      | Middleware for logfile                                                    |
| logRequests.txt     | Logfile for client requests (date, method, url, status, process duration) |



# Structure

tbd


# Front-end

[trainfrontend](https://github.com/simo54/trainfrontend.git) (default front-end react-app)
