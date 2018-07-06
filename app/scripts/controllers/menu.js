'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', ['foodFinder', function (menu) {
    var _this = this;
    menu.getMenu().then(
      function (data) {
        _this.items = data;
      })
    }]
  )
