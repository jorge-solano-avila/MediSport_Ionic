angular.module( "MediSport" )

.controller( "LogIn", function( $rootScope, $scope, $state, $ionicLoading, DataBaseUser, PopUps )
{
    $scope.userVerify = {};
    $scope.userVerify.username = "";
    $scope.userVerify.password = "";
    $rootScope.user = {};

    $scope.verify = function()
    {
        $ionicLoading.show();
        if( $scope.userVerify.username.length === 0 )
        {
            $ionicLoading.hide();
            PopUps.entryUser();
        }
        else
        {
            DataBaseUser.get( $scope.userVerify.username, $scope.userVerify.password )
            .then( function( response )
            {
                if( response.data === "Password incorrect" )
                {
                    $ionicLoading.hide();
                    PopUps.incorrectPassword();
                }
                else if( response.data === "Username incorrect" )
                {
                    $ionicLoading.hide();
                    PopUps.newUser();
                }
                else
                {
                    $rootScope.user = response.data;
                    $ionicLoading.hide();
                    PopUps.welcome( $rootScope.user.name );
                    $state.go( "menu.searchGPS" );
                }
                $scope.userVerify = {};
                $scope.userVerify.username = "";
                $scope.userVerify.password = "";
            }, function( error )
            {
                $ionicLoading.hide();
                PopUps.newUser();
                $scope.userVerify = {};
                $scope.userVerify.username = "";
                $scope.userVerify.password = "";
            } );
        }
    };
} )

.controller( "SignUp", function( $scope, $rootScope, $state, $ionicLoading, DataBaseUser, PopUps )
{
    $scope.userVerify = {};

    $scope.addUser = function()
    {
        $ionicLoading.show();
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
                $ionicLoading.hide();
                if( response.data === "Username in use" )
                {
                    PopUps.userExist();
                }
                else if( response.data.username === $scope.userVerify.username )
                {
                    $rootScope.user = response.data;
                    PopUps.welcome( $rootScope.user.name );
                    $scope.userVerify = {};
                }
                else
                {
                    for( var i in response.data.errors )
                    {
                        PopUps.newUserIncorrect( response.data.errors[i].message );
                        break;
                    }
                }
            }, function( error )
            {
                $ionicLoading.hide();
                PopUps.connectionAlert();
            } );
        }
        else
        {
            $ionicLoading.hide();
            PopUps.incorrectNewPassword();
        }
    };
} )

.controller( "Menu", function( $scope, PopUps )
{

} )

.controller( "Map", function( $rootScope, $scope, $ionicLoading, $ionicPlatform, DataBaseCenter, PopUps )
{
    $ionicPlatform.registerBackButtonAction( function ()
    {
        if( true )
            navigator.app.exitApp();
    }, 100 );
    $scope.map;
    $scope.markers = [];
    $scope.search = {};
    $scope.search.value = 2000;
    $scope.latitude = "";
    $scope.longitude = "";
    $scope.ubications = [];
    $scope.icon = new google.maps.MarkerImage( "img/marker.png", null, null,
        null, new google.maps.Size( 32, 32 ) );
    $scope.iconUbication = new google.maps.MarkerImage( "img/ubication.png", null, null,
        null, new google.maps.Size( 32, 32 ) );

    google.maps.event.addDomListener( window, "load", initMap() );

    function initMap()
    {
        var position =
        {
            lat: 4.595402,
            lng: -74.129665
        };

        $scope.map = new google.maps.Map( document.getElementById( "map" ),
        {
            center: position,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControlOptions:
            {
                style: google.maps.ZoomControlStyle.SMALL
            }
        } );

        navigator.geolocation.getCurrentPosition( function( position )
        {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
            var location =
            {
                lat: $scope.latitude,
                lng: $scope.longitude
            };

            addMarkerUbication( location );
        }, function( error )
        {
            console.log( "Error obteniendo ubicación" );
        } );
    }

    function addMarker( location )
    {
        var marker = new google.maps.Marker
        ( {
            position: location,
            map: $scope.map,
            icon: $scope.icon
        } );

        $scope.markers.push( marker );
    }

    function addMarkerUbication( location )
    {
        var marker = new google.maps.Marker
        ( {
            position: location,
            map: $scope.map,
            icon: $scope.iconUbication
        } );
    }

    function setMapOnAll( map )
    {
        for( var i = 0; i < $scope.markers.length; ++i )
            $scope.markers[i].setMap( map );
    }

    function clearMarkers()
    {
        setMapOnAll( null );
    }

    function showMarkers()
    {
        setMapOnAll( $scope.map );
    }

    function deleteMarkers()
    {
        clearMarkers();
        $scope.markers = [];
    }

    $scope.find = function()
    {
        $ionicLoading.show();
        deleteMarkers();
        DataBaseCenter.getNearby( $scope.latitude, $scope.longitude, $scope.search.value )
        .then( function( response )
        {
            $ionicLoading.hide();
            $scope.ubications = response.data;
            for( var i in $scope.ubications )
            {
                var position =
                {
                    lat: $scope.ubications[i].latitude,
                    lng: $scope.ubications[i].longitude
                };

                addMarker( position );
            }
        }, function( error )
        {
            $ionicLoading.hide();
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
