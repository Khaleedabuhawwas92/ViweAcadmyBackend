const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require('./tutorial.model.js')(mongoose);
db.locations = require('./locations.model.js')(mongoose);
db.myquizes = require('./myQuizes.model.js')(mongoose);
db.cash = require('./dailyCash.model.js')(mongoose);
db.question = require('./question.model.js')(mongoose);
db.notes = require('./notes.model.js')(mongoose);
db.coruses = require('./courses.model.js')(mongoose);
// db.discraption = require("./discraption.model.js")(mongoose);
db.user = require('./users.model.js')(mongoose);
module.exports = db;
