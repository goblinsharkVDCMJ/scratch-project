const database = require('./model/activityUserModel');
const dbController = {};

dbController.getActivities = (req, res, next) => {
    database.Activity.find({}).then((data) => {
        console.log(data);
        res.locals.activities = data;
        return next();
    }).catch((err) => {
        return next({ message: { err: err } });
    });
}

dbController.getUserActivities = (req, res, next) => {
    const { id } = req.body;
    database.User.find({ id }).then((data) => {
        console.log(data);
        res.locals.userActivities = data;
        return next();
    }).catch((err) => {
        return next({ message: { err: err } });
    });
}

dbController.postActivity = (req, res, next) => {
    const { activityName, requiredCount, owner, userId } = req.body;
    const firstParticipant = [userId];

    database.Activity.create({
        activityName,
        currentCount: 1,
        requiredCount, // this is a string
        owner,
        people: firstParticipant,
    }).then((data) => {
        console.log(data);
        return next();
    }).catch((err) => {
        return next({ message: { err: err } });
    });
}

dbController.addUserToActivity = (req, res, next) => {
    const { userId, ownerUsername } = req.body;
    database.Activity.updateMany(
        { owner: ownerUsername },
        { $push: { "people": userId } }
    ).then((data) => {
        console.log(data);
        return next();
    }).catch((err) => {
        return next({ message: { err: err } });
    });
}

// dbController.createUser = (req, res, next) => {

// }

// dbController.authenticateUser = (req, res, next) => {
    
// }

module.exports = dbController;