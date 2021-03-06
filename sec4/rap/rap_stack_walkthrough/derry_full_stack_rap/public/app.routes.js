(function() {
  "use strict";

  angular
    .module("fishinApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("homePage", {
        url: "/",
        templateUrl: "/templates/home.html",
        controller: "LoginController",
        controllerAs: "vm",
        requireAuth: false
      })
      .state("aboutPage", {
        url: "/about",
        templateUrl:  "/templates/about.html"
      })
      .state("register", {
        url: "/register",
        templateUrl: "/templates/register.html",
        controller: "UsersController",
        controllerAs: "vm"
      })
      .state("triumphs", {
        url: "/triumphs",
        templateUrl: "/templates/triumphs.html",
        controller: "TriumphsController",
        controllerAs: "vm",
        requireAuth: true
      });

    $urlRouterProvider.otherwise("/");
  }

})();
