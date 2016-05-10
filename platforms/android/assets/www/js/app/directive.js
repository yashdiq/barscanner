mlm.directive('routeLoadingIndicator', function ($rootScope) {
    return {
        restrict:'E',
        template:'<div class="sk-cube-grid">\n\
          <div class="sk-cube sk-cube1"></div>\n\
          <div class="sk-cube sk-cube2"></div>\n\
          <div class="sk-cube sk-cube3"></div>\n\
          <div class="sk-cube sk-cube4"></div>\n\
          <div class="sk-cube sk-cube5"></div>\n\
          <div class="sk-cube sk-cube6"></div>\n\
          <div class="sk-cube sk-cube7"></div>\n\
          <div class="sk-cube sk-cube8"></div>\n\
          <div class="sk-cube sk-cube9"></div>\n\
        </div>',
        link:function(scope, elem, attrs){
            scope.isRouteLoading = false;
            
            $rootScope.$on('$routeChangeStart', function(){
                scope.isRouteLoading = true;
            });
            $rootScope.$on('$routeChangeSuccess', function(){
                scope.isRouteLoading = false;
            });
        }
    };
});