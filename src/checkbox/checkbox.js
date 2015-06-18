'use strict';

angular.module('angularify.semantic.checkbox', [])
.directive('checkbox', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      type: "@",
      size: "@",
      checked: "&?",
      disabled: "&?",
      ngModel: '=ngModel'
    },
    controller: function() {
      var vm = this;

      if(vm.checked) {
        vm.ngModel = true;
      }

      vm.classes = {
        slider: vm.type == 'slider',
        toggle: vm.type == 'toggle',

        large: vm.size == 'large',
        huge: vm.size == 'huge'
      };

      vm.toggle = function() { vm.ngModel = !vm.ngModel }
    },
    controllerAs: 'vm',
    bindToController: true,
    require: [ 'checkbox', 'ngModel' ],
    template: "<div class=\"ui checkbox\" ng-class=\"vm.classes\">" +
      "<input type=\"checkbox\" ng-model=\"vm.ngModel\" ng-checked=\"vm.checked\" ng-disabled=\"vm.disabled\"/>" +
      "<label ng-click=\"vm.toggle()\" ng-transclude></label>" +
      "</div>",
    link: function() { }
  };
});
