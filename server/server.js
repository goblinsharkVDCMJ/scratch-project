const express = require("express");
const path = require("path");
const cors = require('cors');
const app = express();
const apiRouter = require('./apiRouter')

app.use(cors());
app.use(express.json());

// create path to login
app.get('/api/login', (req, res)=>{
    return res.status(200).sendFile(path.join(__dirname, 'location of login html'))
})
// create path to sign up
app.get('/api/signUp', (req, res)=>{
    return res.status(200).sendFile(path.join(__dirname, 'location of sign up html file'))
})
// create path to homepage
app.use('/api/homePage',apiRouter)

// create path to event creation page
app.get('/api/createAGoodTime', (req, res)=>{
    return res.status(200).sendFile(path.join(__dirname, 'location of event creation page html'))
})


app.use('*', (req, res) => {
    return res.sendStatus(404);
});

// Global error handling middleware
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    console.log(err);
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    console.log(errorObj.message);
    return res.status(errorObj.status).send(errorObj.message);
});

app.listen(3000, function () {
    console.log("Started application on port %d", 3000);
});