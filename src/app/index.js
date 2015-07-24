'use strict';

var gcdiapp = angular.module('wedding', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl'
  })

  .state('wedding', {
    url: '/wedding',
    templateUrl: 'app/wedding/wedding.html',
    controller: 'WeddingCtrl'
  })

  .state('rsvp', {
    url: '/rsvp',
    templateUrl: 'app/rsvp/rsvp.html',
    controller: 'RsvpCtrl'
  })

  .state('charity', {
    url: '/charity',
    templateUrl: 'app/charity/charity.html',
    controller: 'CharityCtrl'
  });

  $urlRouterProvider.otherwise('/');

});

