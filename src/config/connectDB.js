import mongoose from 'mongoose';
import bluebird from 'bluebird';

let connectDB = () => {
    mongoose.Promise = bluebird;
    // *pattern*  mongodb://localhost:27017/magic_chat
    let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

    return mongoose.connect(URI, {useMongoClient: true});
}

module.exports = connectDB;