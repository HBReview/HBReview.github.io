myApp.controller('myController', function($scope, $http){
	$http.get("http://mysafeinfo.com/api/data?list=englishmonarchs&format=json").success(function(response){
		$scope.myData=response;
	});
	$scope.removeData=function(row){
		$scope.myData.splice($scope.myData.indexOf(row),1);
	}
});