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
        /*
        var user = new User( newUser );

        user.save( function( error )
        {
            if( error )
            {
                console.log( typeof error );
                console.log( Object.toType( error ) );
                console.log( error );
                var alertPopup = $ionicPopup.alert
                ( {
                    title: "Datos incompletos",
                    template: "Por favor ingresa todos los campos requeridos"
                } );

                alertPopup.then( function( res )
                {
                    console.log( "Confirmation alert" );
                } );
            }
        } );*/
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
