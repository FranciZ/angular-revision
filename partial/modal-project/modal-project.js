angular.module('angularRevision')
.controller('ModalProjectCtrl',function($scope, $modalInstance, project, test){

	var resetProject = angular.copy(project);

	$scope.project = project;

	$scope.ok = function(){

		$scope.project.dateTime = Date.now();
		$modalInstance.close();

	};

	$scope.cancel = function(){

		angular.extend($scope.project, resetProject);
		$modalInstance.close();

	};

});