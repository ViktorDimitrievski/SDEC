angular
	.module('homeWorkApp',[])
	.controller('inputFields', function ($scope) {
		
		$scope.name= undefined;
		$scope.phone= undefined;
		$scope.email= undefined;
			
		 $scope.contacts = [];
		
			
		$scope.save = function(){
			$scope.contacts.push(
				{
                name: $scope.name,
                email: $scope.email,
                phone: $scope.phone
				}
			);
		};
		
		$scope.save();
	});
	
	
	
	