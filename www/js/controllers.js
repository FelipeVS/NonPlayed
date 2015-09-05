angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, toastr) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    toastr.success('Hello ' + $scope.loginData.username, {
    iconClass: 'toast-Steam',
    tapToDismiss: true,
    timeOut: 800
  });

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('myGamesController', function($scope, $rootScope, $state, $location, $http, $q) {

  $scope.gamesList = $http.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=920C48581409877DA24ACF62FD33F8AB&steamid=76561198022216074&format=json&include_appinfo=1').then(function(response) {
    console.log('sucsess!!', response);
  }, function(response) {
    console.log('error!!', response);
  });
  console.log($scope.gamesList);

  $scope.games = [
    {
      name: 'Mafia',
      appid: ' ',
      img_logo_url: 'http://lorempixel.com/64/64/abstract',
      img_icon_url: '',
      tags: [
        'Open world',
        'Classic',
        '30s'
      ]
    },
    {
      title: 'Supreme Commander',
      url: ' ',
      photoUrl: 'http://lorempixel.com/64/64/city',
      tags: [
        'RTS',
        'Total Annihilation',
        'Massive'
      ]
    },
    {
      title: 'Grim Fandango',
      url: ' ',
      photoUrl: 'http://lorempixel.com/64/64/people',
      tags: [
        'Point & Click',
        'Noir',
        'Jazz'
      ]
    },
    {
      title: 'Planetside 2',
      url: ' ',
      photoUrl: 'http://lorempixel.com/64/64/sports',
      tags: [
        'MMO',
        'FPS',
        'War'
      ]
    }
  ];

  $scope.gameSelected = function (game) {
    $rootScope.selectedGame = game
    // $state.transitionTo("app.gameDetails")
    // $location.url('/myGames/' + $rootScope.selectedGame.title);
    console.log("Going to " + $rootScope.selectedGame.title + " page");
  }

})

.controller('searchController', function($scope, $stateParams) {
})

.controller('myStatsController', function($scope, $stateParams) {
})

.controller('gameDetailsController', function($scope, $rootScope, $stateParams) {
  $scope.game = $rootScope.selectedGame;
  $scope.title = $stateParams.gameTitle;

});
