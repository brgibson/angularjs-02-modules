(function() {
    angular.module("commonServices")
       .service("days", days);

    function days(nowValue) {
        this.today = nowValue.getDay();
        this.tomorrow = (this.today + 1) % 7;
    }
})();