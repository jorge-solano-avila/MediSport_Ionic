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
    this.server = "http://apimedisport.herokuapp.com";

    this.add = function( newUser )
    {
        return $http.post( this.server + "/newUser", newUser );
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
        return $http.post( this.server + "/user",
        {
            username: username,
            password: password
        } );
    };
} )

.service( "PopUps", function( $rootScope, $ionicPopup, $state )
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

    this.incorrectNewPassword = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Contraseñas no coinciden",
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
                $state.go( "signup" );
        } );
    };

    this.newUserIncorrect = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Datos incorrectos",
            template: "Por favor revisa los datos ingresados."
        } );

        alertPopup.then( function( response )
        {
            console.log( "incorrect dates" );
        } );
    };

    this.welcome = function()
    {
        var alertPopup = $ionicPopup.alert
        ( {
            title: "Bienvenido",
            template: "Bienvenido a MediSport."
        } );

        alertPopup.then( function( response )
        {
            $state.go( "menu.searchGPS" );
        } );
    };
} );
