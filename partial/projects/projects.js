/* globals confirm */

angular.module('angularRevision')
.controller('ProjectsCtrl',function($scope, $modal, projects, ProjectService){

	$scope.projects = ProjectService.model.list;

	$scope.editProject = function(project){

		var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'partial/modal-project/modal-project.html',
	      controller: 'ModalProjectCtrl',
	      size: 'lg',
	      resolve: {
	        project: function () {
                return project;
	        },
	        test:function(){
                return 'myTest';
	        }
	      }
	    });

	};

	$scope.dragControlListeners = {
	    accept: function (sourceItemHandleScope, destSortableScope) {return true;},
	    itemMoved: function (event) {},
	    orderChanged: function(event) {},
	    containment: '#board',
	    clone: true,
	    allowDuplicates: false 
	};


    $scope.createProject = function(){
      
        var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'partial/modal-project/modal-project.html',
	      controller: 'ModalProjectCtrl',
	      size: 'lg',
	      resolve: {
	        project: function () {
                return null;
	        },
	        test:function(){
                return 'myTest';
	        }
	      }
	    });
        
    };
    
	$scope.removeProject = function(projectId){

		var c = confirm('Are you sure you want to delete this project');

		if(c){

			ProjectService.deleteProject(projectId);

		}

	};

	$scope.publishProject = function(project){

		console.log($scope.projects);

		project.isPublished = true;		

	};

	$scope.unpublishProject = function(project){

		project.isPublished = false;

	};

});










