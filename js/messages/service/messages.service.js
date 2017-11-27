angular.module('tinychat').service('messageService', function($http){
    this.getMessages = function(scope){
        $http({method: 'GET', url: '/fixtures/fakedata.json'})
            .then(function (response) {
                var data = response.data;
                if (data.messages && data.messages.length > 0 && data.messages.length > scope.messages.length){
                    for (let i = 0; i < data.messages.length; i++){
                            scope.messages.push(data.messages[i]); 
                        } 
                    } 
            },
            function(error) {
                console.error(error || "Request failed");
            });   
    };

    this.sendMessage = function(message, scope){
        scope.messages.push(message); 
        
        //Replace with commented code once backend is ready! 
        /**
        $http({method: 'POST', url: '/messages', data: message})
            .success(function(data){
                message.id = data.id; 
                scope.messages.push(message); 
            })
            .error(function(data, status) {
                console.error(data || "Request failed");
                // Remove added message 
                scope.messages.pop();
            });
            **/
    }; 
});