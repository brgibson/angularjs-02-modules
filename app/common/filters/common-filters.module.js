(function() {
    angular.module("commonFilters", [])
    .config(function() {
        window.console.log("commonFilters config");
   })
   .run(function() {
        window.console.log("commonFilters run");
   });
})();