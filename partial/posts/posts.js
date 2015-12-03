angular.module('angularRevision').controller('PostsCtrl',function($scope, PostsService){

    console.log(PostsService);
    
    $scope.posts = PostsService.model.list;
    
    $scope.removePost = function(id){
      
        PostsService.removeItem(id);
        
    };

});