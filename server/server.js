const express = require("express");
const path = require("path");
const cors = require('cors');
const app = express();
const apiRouter = require('./apiRouter')

app.use(cors());
app.use(express.json());

// create path to homepage
app.use('/api/db', apiRouter);


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