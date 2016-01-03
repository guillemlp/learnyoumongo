var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

var user =  {
    name: "Tina",
    age: 30,
    username: "tinatime"
}

mongo.connect(url, function(err, db) {
    if (err) throw err
    var collection = db.collection('users')
    collection.update(user/* or {username: "tinatime"}*/, {$set: {age: 40}}, function(err, data) {
        if (err) throw err
        console.log(JSON.stringify(user))
        db.close();
    })
})