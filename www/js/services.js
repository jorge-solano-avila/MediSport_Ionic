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

.service( "DataBaseUser", function( $rootScope, $http, PopUps )
{
    $rootScope.users = [];

    this.add = function( newUser )
    {

    };

    this.delete = function( id )
    {

    };

    this.getAll = function()
    {
        console.log( "GET ALL" );
        $http.get( "http://apimedisport.herokuapp.com/users" )
        .success( function( data )
        {
            $rootScope.users = data;
        } )
        .error( function( err )
        {
            console.log( "Error get all" );
            PopUps.connectionAlert();
        } );
    };

    this.get = function( username )
    {

    };
} )

.service( "PopUps", function( $rootScope, $ionicPopup )
{
    this.connectionAlert = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Error de conexión",
            template: "Por favor revisa tu conexión a la red."
        } );

        alertPopup.then( function( response )
        {
            console.log( "connection alert" );
        } );
    };

    this.newUser = function()
    {
        var confirmPopup = $ionicPopup.confirm
        ( {
            title: "Usuario no encontrado",
            template: "¿Desea registrarse?"
        } );

        confirmPopup.then( function( response )
        {
            if( response )
                console.log( 'You are sure' );
            else
                console.log( 'You are not sure' );
        } );
    };
} );
