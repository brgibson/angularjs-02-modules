(function() {
    angular.module("feature")
       .directive("highlight", highlight);

    function highlight($filter) {
        var dayFilter = $filter("dayNames");
        return {
            link: function(scope, element, attrs) {
                if (dayFilter(scope.day) === attrs["highlight"]) {
                    element.css("color", "lightgreen")
                }
            }
        };
    }
})();