var app = angular.module("myApp",[]);
const apiUrl = "https://test-api.jamatu.com/api/events/self/past/Ge7vMUwkSEWmMWOk12uTFg==/ecabae94cade4077b96b900037571607?organizationid=2171&sort=enddate_desc";

//Making the API call and storing the API data
app.controller("myCtrl",['$scope','$http',function ($scope,$http) {
       $http.get(apiUrl).then(function(response){
            //Storing the data of the response into "events" for using displaying into the AngularJS interpolation
                $scope.events = response.data;
            });
}]);

//For formating the data that is stored in events but also for formating data in other places where needed, I created some filters.

//For security reasons, html should convert to text, so the scripts that could be used will be eliminated.
//Converter
app.filter('htmlToPlaintext', function(){
    return function(text){
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  });

//Decode URI
app.filter('deCode', function() {
      return window.decodeURIComponent;
  });

//Trust HTML if the description formating is needed
app.filter('unsafe', function($sce){
   return $sce.trustAsHtml;
});


