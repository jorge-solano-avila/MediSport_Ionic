// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// "starter" is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of "requires"
// "starter.controllers" is found in controllers.js
angular.module( "MediSport", ["ionic"] )

.run( function( $ionicPlatform )
{
    $ionicPlatform.ready( function()
    {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if( window.cordova && window.cordova.plugins.Keyboard )
        {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
            cordova.plugins.Keyboard.disableScroll( true );
        }
        if( window.StatusBar )
        {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    } );
} )

.config( function( $stateProvider, $urlRouterProvider )
{
    $stateProvider

    .state( "login",
    {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "LogIn"
    } )

    .state( "signup",
    {
        url: "/signup",
        templateUrl: "templates/signup.html",
        controller: "SignUp"
    } )

    .state( "menu",
    {
        url: "/menu",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "Menu"
    } )

    .state( "menu.searchGPS",
    {
        url: "/searchGPS",
        views:
        {
            "menuContent":
            {
                templateUrl: "templates/searchGPS.html",
                controller: "Map"
            }
        }
    } )

    .state( "menu.search",
    {
        url: "/search",
        views:
        {
            "menuContent":
            {
                templateUrl: "templates/search.html",
                controller: "Search"
            }
        }
    } )

    .state( "menu.account",
    {
        url: "/account",
        views:
        {
            "menuContent":
            {
                templateUrl: "templates/account.html",
                controller: "Account"
            }
        }
    } );
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise( "/login" );
} );
