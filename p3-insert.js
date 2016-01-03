var mongo = require('mongodb').MongoClient

var doc =  {
    firstName: process.argv[2],
    lastName: process.argv[3]
}

var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
    if (err) throw err
    var collection = db.collection('docs')
    collection.insert(doc /* or {firstName: process.argv[2], lastName: process.argv[3]}*/, function(err, data) {
        if (err) throw err
        console.log(JSON.stringify(doc))
        db.close();
    })
})