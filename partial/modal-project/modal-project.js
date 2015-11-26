angular.module('angularRevision')
.controller('ModalProjectCtrl',function($scope, $modalInstance){

	$scope.ok = function(){

		$modalInstance.close();

	};

	$scope.cancel = function(){

		$modalInstance.close();

	};

});