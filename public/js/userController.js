"use strict;"

angular.module('appName')
.controller('userController', function($scope,$http,userService) {

	$scope.userArray =[];

	userService.getAll()
	.then( function(users){
		if(users) $scope.userArray.push(...users);
	})
	.catch( err => {
		console.log(err);
	});



	$scope.addOneUser = function(user){
		userService.addOne(user)
		.then( function(newUser){
			if(newUser) $scope.userArray.push(newUser);
		})
		.catch( err => {
			console.log(err);
		});
	}

	$scope.removeOneUser = function(user){
		let index = $scope.userArray.indexOf(user);
		userService.removeOne(user)
		.then( function(){
			$scope.userArray.splice(index,1);
		})
		.catch( err => {
			console.log(err);
		});
	}

	//  assumes uuid that doesn't change on edit
	$scope.editOneUser = function(editedUser){
	console.log(editedUser);
		userService.editOne(editedUser)
		.then( function(updatedUser){
			console.log('edited');
		})
		.catch( err => {
			console.log(err);
		});
	}


});



