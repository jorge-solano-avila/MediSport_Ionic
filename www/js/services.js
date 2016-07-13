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
    this.user = {};

    this.add = function( newUser )
    {

    };

    this.delete = function( id )
    {

    };

    this.getAll = function()
    {
        console.log( "GET ALL" );
    };

    this.get = function( username, password )
    {
        return $http.post( "http://localhost:8000/users",
        {
            username: username,
            password: password
        } );
        /*
        .success( function( data )
        {
            console.log( data );
            if( data === "Error" )
                PopUps.incorrectPassword();
            else
                return data;
        } )
        .error( function( error )
        {
            PopUps.newUser();
        } );*/
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

    this.incorrectPassword = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Contraseña incorrecta",
            template: "Por favor revisa tu contraseña."
        } );

        alertPopup.then( function( response )
        {
            console.log( "incorrect password" );
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
