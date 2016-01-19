var Anyways = angular.module("Anyways", [ "ui.bootstrap" ]);

Anyways.directive("anywaysNavbar", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "tpl/navbar.tpl",
    replace: true
  });
} ]);

Anyways.directive("anywaysCarousel", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "tpl/carousel.tpl",
    replace: true
  });
} ]);

Anyways.controller("Nav", [ "$scope", function($scope) {
  
} ]);

