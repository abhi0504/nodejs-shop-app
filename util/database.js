const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://abhishek_0504:9971749520a@cluster0.b6e9z.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then((client) => {
        console.log('connected!');
        callback(client);
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports = mongoConnect;
