(function() {
    angular.module("commonServices", [])
    .config(function() {
        window.console.log("commonServices config");
   })
   .run(function() {
        window.console.log("commonServices run");
   });
})();