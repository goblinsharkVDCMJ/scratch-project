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
    const firstParticipant = [];
    firstParticipant.push(userId)

    database.Activity.create({
        activityName,
        currentCount: 1,
        requiredCount, 
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
   
    const { userId, activityId } = req.body;
    database.Activity.updateOne(
        { _id: activityId },
        { $push: { "people": userId }, $inc: {currentCount: 1} },
    ).then((data) => {
        console.log(data);
        return next();
    }).catch((err) => {
        return next({ message: { err: err } });
    });
}

dbController.createUser = (req, res, next) => {
    const { name, password } = req.body;
    const joinedActivities = [];
    database.User.create({
        name,
        password,
        joinedActivities
    }).then((data) => {
        console.log(data);
        return next();
    }).catch((err) => {
        return next({ message: { err: err } });
    });
}

dbController.authenticateUser = (req, res, next) => {
    console.log('hi')
    const { name, password } = req.body
    console.log(name);
    database.User.findOne({ "name": name }).then((data) => {
        console.log(password, data)
        if (password === data.password) {
            return next()
        }
    }).catch((err) => {
        return next({message: {err: err}})
    })
 
}

module.exports = dbController;