angular.module( "MediSport" )

.controller( "LogIn", function( $rootScope, $scope )
{
    $rootScope.test = "TEST";
} )

.controller( "SignUp", function( $scope )
{
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
