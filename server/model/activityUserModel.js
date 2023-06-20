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
  
  },
  people: {
    type: Array,
    required: true
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
  
  }
});

const User = mongoose.model('User', userSchema);
const Activity = mongoose.model('Activity', activitySchema);

module.exports = { Activity, User };
