# SCHOOL APP (React - Express.js - Node.js - MongoDB)

To see the project up and running visit [here](https://school-diary.netlify.app/) (there can be 15 seconds delay before the server starts).

## Instructions:

Backend is deployed to Heroku. All you need to do to start the app locally is:

1. git clone git@github.com:Nemanja-Petrovic/schoolDiary.git
2. npm install
3. npm start
4. create .env in root directory --> REACT_APP_API=https://school-diary-server.herokuapp.com

## Endpoints:

|        | students      | teachers      | classes      |
| ------ | ------------- | ------------- | ------------ |
| get    | /students     | /teachers     | /classes     |
| get    | /students/:id | /teachers/:id | /classes/:id |
| put    | /students/:id | /teachers/:id |
| delete | /students/:id | /teachers/:id |
