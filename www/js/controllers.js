angular.module( "MediSport" )

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
                /*
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
                } );*/
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
        console.log( "GET" );
        User.findOne( { "username": username }, "name", function( error, user )
        {
            if( error )
                console.log( error );
            console.log( user.name );
        } );
    };
} )

.controller( "LogIn", function( $rootScope, $scope, DataBaseUser )
{
    $rootScope.user = "";
    $rootScope.password = "";

    $scope.verify = function()
    {
        console.log( "VERIFIY" );
        DataBaseUser.get( user );
    };
} )

.controller( "SignUp", function( $scope )
{
    $rootScope.name = "";
    $rootScope.user = "";
    $rootScope.password = "";

    $scope.verify = function()
    {

    };
} )

.controller( "Menu", function( $scope )
{

} )

.controller( "Map", function( $rootScope, $scope )
{
    google.maps.event.addDomListener( window, "load", initialize() );

    function initialize()
    {
        var mapOptions =
        {
            center: { lat: 4.6486259, lng: -74.2478955 },
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControlOptions:
            {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };

        var map = new google.maps.Map( document.getElementById( "map" ), mapOptions );

        navigator.geolocation.getCurrentPosition( function( pos )
        {
            var latitude = pos.coords.latitude;
            var longitude = pos.coords.longitude;
            var position = new google.maps.LatLng( latitude, longitude );
            map.setCenter( position );
            var myLocation = new google.maps.Marker(
            {
                position: position,
                map: map,
                title: "My Location"
            } );
        } );

        $scope.map = map;
    }
} )

.controller( "Search", function( $scope )
{

} )

.controller( "Account", function( $scope )
{

} );
