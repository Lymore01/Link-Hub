require("dotenv").config()
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// Set up MongoDB session store
const store = new MongoDBStore({
    uri: process.env.SESSION_STORE_URI,
    collection: 'sessions'
});
  
  // Catch errors
  store.on('error', function(error) {
    console.error('Session store error:', error);
  });

module.exports = store