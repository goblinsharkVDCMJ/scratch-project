const mongoose = require('mongoose');

const MONGO_URI = '';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    })
  .then(() => console.log('Connected to Mongo DB')) 
  .catch((err) => console.log(err));


const Schema = mongoose.Schema;

const activitySchema = new Schema({
  activityName: {
    type: String,
    required: [true, 'You must provide an activity']
  },
  currentCount: {
    type: Number,
  },
  requiredCount: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
    // should contain reference to username or id 
    // if user is logged in we should have access to their username
  },
  people: {
    type: Array,
    required: true

    // reference a people document through an id 
    // can perform search query with $in e.g. activity.find({people: {$in: whateverUserIdWas}})
    // https://www.mongodb.com/docs/manual/reference/operator/query/in/
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'You must set a username'],
    minLength: [3, 'Your username is too short'],
    unique: [true, 'That username is taken']
  },
  password: {
   type: String,
   required: true,
   minLength: [10, 'Your password must contain at least 10 characters']
  },
  joinedActivities: {
    type: Array,
    required: true, 
    // reference an activity document through an id 
    // can perform search query with $in e.g. user.find({activities: {$in: whateverActivityIdWas}})
    // can remove from an existing array using $pull 
    // https://www.mongodb.com/docs/manual/reference/operator/update/pull/
  }
});
// get request will need to pull every single activity document

// steps when user clicks activity
// userID gets pushed into people array of activity
// activityID gets pushed into activity array of that user

const User = mongoose.model('User', userSchema);
const Activity = mongoose.model('Activity', activitySchema);

module.exports = { Activity, User };
