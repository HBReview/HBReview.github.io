var app=angular.module("myApp", ["ngRoute"])
     .config(function($routeProvider){
     	$routeProvider
          .when("/", {
               templateUrl:"login.html",
               controller:"loginController"
          })
          .when("/home", {
               resolve:{
                    "check": function($location, $rootScope){
                         if(!$rootScope.loggedIn){
                              $location.path('/');
                         }
                    }
               },
               templateUrl:"html/home.html",
               controller:"homeController"
     	   })
          .when("/courses", {
               resolve:{
                    "check": function($location, $rootScope){
                         if(!$rootScope.loggedIn){
                              $location.path('/');
                         }
                    }
               },
               templateUrl:'html/courses.html',
               controller:"coursesController"
          })
          .when("/students", {
               resolve:{
                    "check": function($location, $rootScope){
                         if(!$rootScope.loggedIn){
                              $location.path('/');
                         }
                    }
               },
               templateUrl:'html/students.html',
               controller:"studentsController"
          })
          .otherwise({
               redirectTo:'/'
          })
     	
     	})
     .controller("loginController", function($scope, $location, $rootScope){
          $scope.submit=function(){
               
               if($scope.username=='admin' && $scope.password=="admin"){
                    $rootScope.loggedIn=true;
                    $location.path('/home');
               }else{
                    alert("Incorrect login id or password");
               }
          };
          })
     .controller("homeController", function($scope){
     	$scope.message="Home Page";
     })
     .controller("coursesController", function($scope){
     	$scope.courses=["C", "C++", "C#","ASP", "PYTHON"];
     })
     .controller("studentsController", function($scope, $http){
     	$http.get("data.json").success(function(response){
     		$scope.myData=response.records;
     	});
     });
     
     
     
     