const express = require('express')
const dbController = require ('./dbController')
const router = express.Router()


// route to fill with current available events
router.get('/',
    dbController.someMiddleWareToGetTheData,
    (req, res,)=>{

    })

// 



module.exports = router;