'use strict';

/**
 * @ngdoc overview
 * @name homework4App
 * @description
 * # homework4App
 *
 * Main module of the application.
 */
var app = angular
  .module('mySchoolApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './assets/html/home.html',
      })
      .when('/homework', {
        templateUrl: './assets/html/homework.html',
        controller: 'homeworkController',
        controllerAs: 'vm',
      })
      .when('/clubs', {
        templateUrl: './assets/html/clubs.html',
        controller: 'clubsController',
        controllerAs: 'vm',
      })
      .when('/about', {
        templateUrl: './assets/html/about.html',
      })
      /*.when('/school', {
        templateUrl: './assets/html/school.html',
      })*/
      .otherwise({
        redirectTo: '/'
      });
  });