angular.module('angularRevision').factory('ProjectService',function() {

	var project = {
		model:{
			list:[
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
					isPublished:false,
					image:'http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg'
				}

			]
		},
		removeProject:function(projectId){

			angular.forEach(project.model.list, function(_project, i){

				if(projectId === _project._id){

					project.model.list.splice(i,1);

				}

			});

		}
	};

	return project;
});