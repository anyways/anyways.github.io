var Anyways = angular.module("Anyways", [ "ui.bootstrap" ]);

Anyways.directive("anywaysNavbar", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "html/navbar.html",
    replace: true
  });
} ]);

Anyways.controller("Nav", [ "$scope", function($scope) {
  
} ]);

