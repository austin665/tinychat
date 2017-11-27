angular.module('tinychat').controller('messageCtrl', function($scope, $interval, messageService){
    $scope.messages = []; 

    angular.element(document).ready(function(){
        messageService.getMessages($scope);
        //TODO:: use something like socket.io instead of polling the servers
        $interval(function(){
            messageService.getMessages($scope);
        }, 4000);  
    });

    $scope.sendMessage = function(){
        if ($scope.formContent && $scope.formContent.trim() !== ''){
            var message = {
                "author": $scope.formUserName, 
                "timestamp": new Date().getTime(), 
                "content": $scope.formContent, 
                "avatar": 'anon.png',
                "me": true
            };
            messageService.sendMessage(message, $scope);
            $scope.formContent = '';
            $scope.formUserName = '';
        }
    }; 
});