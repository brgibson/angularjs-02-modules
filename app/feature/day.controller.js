(function() {
    angular.module("feature")
       .controller("Day", Day);

    function Day($scope, days) {
        $scope.day = days.today;
    }
})();