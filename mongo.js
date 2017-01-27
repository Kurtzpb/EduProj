var mongo = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/user';

mongo.connect(url, function (err, db) {
	assert.equal(null, err);
	console.log('Connected to mongodb!');
	db.close();
})
