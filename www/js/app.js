angular.module('starter', ['ionic', 'starter.controllers', 'ngAnimate', 'toastr'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'searchController'
      }
    }
  })

  .state('app.myStats', {
      url: '/myStats',
      views: {
        'menuContent': {
          templateUrl: 'templates/myStats.html',
          controller: 'myStatsController'
        }
      }
    })
    .state('app.myGames', {
      url: '/myGames',
      views: {
        'menuContent': {
          templateUrl: 'templates/myGames.html',
          controller: 'myGamesController'
        }
      }
    })

  .state('app.gameDetails', {
    url: '/myGames/:gameTitle',
    views: {
      'menuContent': {
        templateUrl: 'templates/gameDetails.html',
        controller: 'gameDetailsController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/myGames');
});
