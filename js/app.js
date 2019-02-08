var app = angular.module("myApp",[]);

app.filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  });

app.filter('deCode', function() {
      return window.decodeURIComponent;
  });

app.filter('unsafe', function($sce){
   return $sce.trustAsHtml; });

app.controller("myCtrl",['$scope','$http',function ($scope,$http) {
      $http.get("https://test-api.jamatu.com/api/events/self/past/Ge7vMUwkSEWmMWOk12uTFg==/ecabae94cade4077b96b900037571607?organizationid=2171&sort=enddate_desc")
            .then(function(response){
                $scope.events = response.data;
            });
}]);
