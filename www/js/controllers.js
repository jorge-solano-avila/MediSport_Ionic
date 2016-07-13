angular.module( "MediSport" )

.controller( "LogIn", function( $rootScope, $scope, $state, DataBaseUser, PopUps )
{
    $scope.userVerify = {};
    $rootScope.user = {};

    $scope.verify = function()
    {
        DataBaseUser.get( $scope.userVerify.username, $scope.userVerify.password )
        .then( function( response )
        {
            if( response.data === "Password incorrect" )
                PopUps.incorrectPassword();
            else if( response.data === "Username incorrect" )
                PopUps.newUser();
            else
            {
                $rootScope.user = response.data;
                $state.go( "menu.searchGPS" );
            }
            $scope.userVerify = {};
        }, function( error )
        {
            PopUps.newUser();
            $scope.userVerify = {};
        } );
    };
} )

.controller( "SignUp", function( $scope, $rootScope, $state, DataBaseUser, PopUps )
{
    $scope.userVerify = {};

    $scope.addUser = function()
    {
        $rootScope.user = $scope.userVerify;
        if( $scope.userVerify.password === $scope.userVerify.passwordAux )
        {
            DataBaseUser.add
            ( {
                name: $scope.userVerify.name,
                username: $scope.userVerify.username,
                password: $scope.userVerify.password
            } )
            .then( function( response )
            {
                PopUps.welcome();
                $scope.userVerify = {};
            }, function( error )
            {
                PopUps.newUserIncorrect();
            } );
        }
        else
            PopUps.incorrectNewPassword();
    };
} )

.controller( "Menu", function( $scope, PopUps )
{

} )

.controller( "Map", function( $rootScope, $scope, DataBaseCenter, PopUps )
{
    $scope.latitude = "";
    $scope.longitude = "";
    $scope.ubications = [];

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
            $scope.latitud = pos.coords.latitude;
            $scope.longitude = pos.coords.longitude;
            var position = new google.maps.LatLng( $scope.latitud, $scope.longitude );
            map.setCenter( position );
            var myLocation = new google.maps.Marker(
            {
                position: position,
                map: map,
                title: "My Location"
            } );
        } );

        $scope.map = map;
    };

    $scope.find = function()
    {
        console.log( "FIND" );
        DataBaseCenter.getAll()
        .then( function( response )
        {
            $scope.ubications = response.data;
            console.log( $scope.ubications );
            for( var i in $scope.ubications )
            {
                console.log( $scope.ubications[i].latitude );
                var position = new google.maps.LatLng( $scope.ubications[i].latitude, $scope.ubications[i].longitude );
                var location = new google.maps.Marker(
                {
                    position: position,
                    map: $scope.map,
                    title: "Location"
                } );
            }
        }, function( error )
        {
            console.log( "Errores en marcadores" );
        } );
    };
} )

.controller( "Search", function( $scope, PopUps )
{

} )

.controller( "Account", function( $scope, PopUps )
{

} );
