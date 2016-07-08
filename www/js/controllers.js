angular.module( "MediSport.controllers", [] )

.controller( "LogInCtrl", function( $scope )
{
} )

.controller( "SignUpCtrl", function( $scope )
{
} )

.controller( "Menu", function( $scope )
{
} )

.controller( "Map", function( $scope, $ionicLoading )
{
    console.log( "Not initialize" );
    google.maps.event.addDomListener( window, "load", initialize() );

    function initialize()
    {
        console.log( "Initialize" );
        var mapOptions =
        {
            center: { lat: 28.271834, lng: -16.642405 },
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControlOptions:
            {
                mapTypeIds: []
            },
            panControl: false,
            streetViewControl: false,
            zoomControlOptions:
            {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };

        navigator.geolocation.getCurrentPosition( function( pos )
        {
            map.setCenter( new google.maps.LatLng( pos.coords.latitude, pos.coords.longitude ) );
            var myLocation = new google.maps.Marker(
            {
                position: new google.maps.LatLng( pos.coords.latitude, pos.coords.longitude ),
                map: map,
                title: "My Location"
            } );
        } );

        var map = new google.maps.Map( document.getElementById( "map" ), mapOptions );
        $scope.map = map;
    }
} )

.controller( "Account", function( $scope )
{
} );
