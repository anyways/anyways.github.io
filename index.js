var Anyways = angular.module("Anyways", []);

Anyways.directive("anywaysHeader", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "tpls/anyways-header.tpl",
    replace: true
  });
} ]);

Anyways.directive("anywaysFooter", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "tpls/anyways-footer.tpl",
    replace: true
  });
} ]);

Anyways.directive("anywaysLeftAside", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "tpls/anyways-left-aside.tpl",
    replace: true
  });
} ]);

Anyways.directive("anywaysRightAside", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "tpls/anyways-right-aside.tpl",
    replace: true
  });
} ]);

Anyways.directive("anywaysContent", [ function() {
  return new Object({
    restrict: "E",
    templateUrl : "tpls/anyways-content.tpl",
    replace: true,
    link: function() {
      $.AdminLTE.layout.fix();
    }
  });
} ]);
