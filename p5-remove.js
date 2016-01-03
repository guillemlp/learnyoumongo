var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2]
var col = process.argv[3]
var id = process.argv[4]

mongo.connect(url, function(err, db) {
    if (err) throw err
    var collection = db.collection(col)
    collection.remove({ _id: id }, function(err, data) {
        if (err) throw err
        db.close();
    })
})