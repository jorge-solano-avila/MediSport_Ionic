var mongoose = require( "mongoose" );
var Schema = mongoose.Schema;

mongoose.connect( "mongodb://localhost/medisport" );

var center = new Schema
( {
    name: String,
    address: String,
    location: String
    telephones: Array,
    photo: String,
    latitude: Number,
    longitude: Number
} );

var user = new Schema
( {
    name: String,
    username: String,
    password: String,
    birthday: Date,
    age: Number,
    photo: String
} );

var User = mongoose.model( "User", user );

module.exports.User = User;
