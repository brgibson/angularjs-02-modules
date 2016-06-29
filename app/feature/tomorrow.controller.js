(function() {
    angular.module("feature")
       .controller("Tomorrow", Tomorrow);

    function Tomorrow($scope, days) {
        $scope.day = days.tomorrow;
    }
})();