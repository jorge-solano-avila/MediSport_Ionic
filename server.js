var express = require( "express" );
var app = express();
var User = require( "./mongoosedb" ).User;

app.use( express.static( __dirname + "/www" ) );

app.get( "/login", function( request, response )
{
    console.log( request );
    console.log( response );
} );

var port = process.env.PORT || 3000;
app.listen( port );
