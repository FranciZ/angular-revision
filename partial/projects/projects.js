angular.module('angularRevision')
.controller('ProjectsCtrl',function($scope, $modal){


	$scope.projects = [

		{
			_id:'09jdsa90j23dioka09sdk1',
			category:'Web Development',
			title:'My first project',
			description:'My project description',
			dateTime:Date.now(),
			isPublished:true,
			image:'http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg'
		},
		{
			_id:'09jdsa90j23dioka09sdk2',
			category:'Web Development',
			title:'My second project',
			description:'My project description',
			dateTime:Date.now(),
			isPublished:true,
			image:'http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg'
		},
		{
			_id:'09jdsa90j23dioka09sdk3',
			category:'Web Development',
			title:'My third project',
			description:'My project description',
			dateTime:Date.now(),
			isPublished:true,
			image:'http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg'
		}

	];

	$scope.editProject = function(project){

		var modalInstance = $modal.open({
	      animation: true,
	      templateUrl: 'partial/modal-project/modal-project.html',
	      controller: 'ModalProjectCtrl',
	      size: 'lg',
	      resolve: {
	        items: function () {
	          return project;
	        }
	      }
	    });

	};

	$scope.removeProject = function(projectId){

		/*for(var i=0;i<$scope.projects.length;i++){

			if(projectId === $scope.projects[i]._id){

				$scope.projects.splice(i,1);

			}

		}*/

		angular.forEach($scope.projects, function(project, i){

			if(projectId === project._id){

				$scope.projects.splice(i,1);

			}

		});



	};










});