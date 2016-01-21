var Anyways = angular.module("Anyways", [ "ui.bootstrap" ]);

Anyways.directive("anywaysNavbar", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "tpls/navbar.tpl",
    replace: true
  });
} ]);

Anyways.directive("anywaysCarousel", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "tpls/carousel.tpl",
    replace: true
  });
} ]);

Anyways.controller("Nav", [ "$scope", function($scope) {
  
} ]);

