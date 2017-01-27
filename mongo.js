var mongo = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/node';

var insertUser = function (db, callback) {
	db.collection('users').insertOne ({
		'id': 0,
		'name': 'Aleksey'
	}, function (err, result) {
		assert.equal(err, null);
		console.log('Data was added!');
		callback();
	});
}

mongo.connect(url, function (err, db) {
	assert.equal(null, err);
	insertUser(db, function () {
		db.close();
	})
})
