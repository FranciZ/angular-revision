angular.module('angularRevision').factory('PostsService',function() {

	var posts = {
        model:{
            list:[
                {
                    id:'asdadhas90d093elkajsd0912',
                    title:'This is my first post',
                    content:'This is my post content',
                    author:'Author 1',
                    dateTime:Date.now()-1000
                },
                {
                    id:'asdadhas90d093elkajsd0913',
                    title:'This is my second post',
                    content:'This is my second post content',
                    author:'Author 2',
                    dateTime:Date.now()-2000
                },
                {
                    id:'asdadhas90d093elkajsd0914',
                    title:'This is my first post',
                    content:'This is my third post content',
                    author:'Author 3',
                    dateTime:Date.now()-3000
                }
            ],
            item:{}
        },
        removeItem:function(_id){
            
            angular.forEach(posts.model.list, function(post, index){
               
                if(post.id === _id){
                    posts.model.list.splice(index,1);
                }
                
            });
            
        }
    };

	return posts;
});