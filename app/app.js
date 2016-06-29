(function() {
   angular.module("app", [
       "common",
       "feature"
   ])
   .config(function() {
        window.console.log("APP config");
   })
   .run(function() {
        window.console.log("APP run");
   })

})();