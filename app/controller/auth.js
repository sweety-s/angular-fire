app.controller('auth',function($scope,$location,mainauth){
	$scope.data;
	$scope.Register = function(){	
		if($scope.data.fname && $scope.data.lname && $scope.data.email && $scope.data.phone && $scope.data.pwd){	
			mainauth.Register($scope.data).then(function(response){
				$scope.error = response.message;
				$scope.$evalAsync();
				if(response.uid && response.email){ 
					var user = mainauth.creatProfile($scope.data,response.uid);
					$scope.login($scope.data.email, $scope.data.pwd);
				}					
			});
		}
	};

	$scope.login = function(email,pwd){
		mainauth.login(email,pwd).then(function(response){
			$scope.error = response.message;
			$scope.$evalAsync();
			if(response.uid && response.email){ 
				$location.path('/dashboard');
			}				
		});
	};

	$scope.checkuserlogin = function(){
		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    // User is signed in.
		    $scope.useremail = user.email;
		    $scope.$evalAsync();
		    // ...
		  } else {
		    // User is signed out.
		    $location.path('/login');
		    $scope.$evalAsync();
		    // ...
		  }
		});
	};

	$scope.Logouts = function(){
		console.log('logoutcall');
		firebase.auth().signOut().then(function() {
		 	$location.path('/login');
		}).catch(function(error) {
		    $location.path('/login');
		});
	};
});