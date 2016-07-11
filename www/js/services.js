var User = require( "mongoosedb" ).User;

angular.module( "MediSport" )

.service( "DataBaseCenter", function()
{
    this.add = function( newCenter )
    {

    };

    this.delete = function( center )
    {

    };

    this.getAll = function()
    {

    };
} )

.service( "DataBaseUser", function( $rootScope )
{
    $rootScope.user = {};

    this.add = function( newUser )
    {
        var user = new User( newUser );

        user.save( function( error )
        {
            if( error )
            {

            }
        } );
    };

    this.delete = function( id )
    {

    };

    this.getAll = function()
    {

    };

    this.get = function( username )
    {

    };
} );
