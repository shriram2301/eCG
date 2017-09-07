var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../../components/login.html",
            controller: 'myCtrl'
        })
        .when("/homepage", {
            templateUrl: "../../components/homepage.html",
            controller: 'myCtrl2'
        })
        .when("/userdetail", {
            templateUrl: "../../components/userdetail.html",
            controller: 'myCtrl'
        })
        .when("/acknowledge", {
            templateUrl: "../../components/acknowledge.html",
            controller: 'myCtrl'
        })
        .when("/history", {
            templateUrl: "../../components/history.html",
            controller: 'myCtrl3'
        })
        .when("/acknowledge1", {
            templateUrl: "../../components/acknowledge1.html",
            controller: 'myCtrl'
        })
});

/* app.factory("details",function(){
        return {};
});
app.factory("user",function(){
        return {};
});
app.factory("user",function(){
        return {};
});
app.factory("user",function(){
        return {};
});*/

myApp.controller('myCtrl', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope, ) {

    $scope.user = {
        username: '',
        password: ''
    }
    $scope.viewcardss = false;
    $rootScope.details = {};
    $rootScope.card = [];
    /*$scope.cards=[];*/
    console.log("sakakaka")
    $scope.login = function () {
        console.log("hello");
        //        if($scope.user.username==='' && $scope.user.password==='abcd'){
        //           
        $scope.ajaxcall();
    }


    console.log("heyyy") // api call will be made here 

    //$http.post('/someUrl', data, config).then(successCallback, errorCallback);
    $scope.userdet = {};
    $scope.ajaxcall = function () {
        console.log("2");
        //in place of url enter the url for api call 
        $http.post("http://blockard.burrow.io/Blockard/webapi/login", $scope.user)
            .then(function (response) {
                console.log(response)
                //$scope.details = response.data;
                //$scope.details[name_of_object]= response.body.value_of_key;
                console.log(response.data.phonenumber); //phone number
                console.log("5");

                return angular.fromJson(response.data);


            }, function (error) {
                console.log(error);
                return angular.fromJson(error);
                window.alert("Invalid Login Credentials!");
            }).then(function (data) {


                console.log(data, "data here")
                $rootScope.details = data;
                console.log($rootScope.details)
                /*if (data.status === '-1'){
                        swal(Invalid Credentials);
                    $location.path('');
                    }
                    else {
                        $location.path('homepage');
                    }*/
                $location.path('homepage')
                $rootScope.details = data;
                $scope.userdet = data;
                console.log($rootScope.details)
                $scope.ajaxcall1();
            })
    }
    console.log("3");
    $scope.viewCard = function () {
        console.log("papapa");
        //$scope.ajaxcall1();
        console.log($rootScope.details, "smile")
        console.log($scope.userdet)
        $scope.viewcardss = true;
        //$location.path('userdetail') 
    }


    $scope.checkif = function () {
        // you have to chnage this when u put it ona server 
        if (window.location.href === 'http://127.0.0.1:49987/index.html#/homepage') {
            $scope.viewcardss = !$scope.viewcardss;
        } else {
            $location.path('homepage')
        }
    }
    $scope.ajaxcall1 = function () {
        console.log("ratata");
        //in place of url enter the url for api call 
        $http.post("http://blockard.burrow.io/Blockard/webapi/cards", $rootScope.details)
            .then(function (response) {
                console.log(response);
                console.log("hgccykcydtrs");
                //$scope.details[name_of_object]= response.body.value_of_key;

                console.log(response.data[0].type);
                return angular.fromJson(response.data);


            }, function (error) {
                console.log(error);
                return angular.fromJson(error);
            }).then(function (data) {
                console.log("peevs2");
                //$scope.details.address= data.address;
                //             $scope.card.status= data.active_status;
                //             $scope.card.card_no= data.card_number;
                //             $scope.card.card_type= data.type;
                console.log(data, "helloo pv")
                for (var a = 0; a < data.length; a++) {
                    $rootScope.card.push(data[a]);
                }
                console.log($rootScope.card);
                $scope.cards = $rootScope.card;
                /* $scope.details.middle_name= data.middle_name;
                  $scope.details.phone_no= data.phonenumber;*/

            })
    }
    //       $scope.consoler=function(){
    //     console.log($rootScope.card,"smack that");
    //     $scope.apply();
    // }
    //       $scope.hurray = function(){
    //           console.log("pvvvvvvvvvvvvvvvvvv")
    //       }

    $scope.userdetail = function () {
        $location.path('userdetail');
    }
    $scope.ack = function () {
        $location.path('acknowledge');
    }
    $scope.logout = function () {
        $location.path('');
    }


}]);

myApp.controller('myCtrl2', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope, ) {
    $scope.login = function () {
        console.log("hello");
        //        if($scope.user.username==='' && $scope.user.password==='abcd'){
        //           
        $scope.ajaxcall();
    }
    $scope.alert1 = function () {
        swal('hello');
        console.log("in alert 1")
    }

    console.log("heyyy") // api call will be made here 

    //$http.post('/someUrl', data, config).then(successCallback, errorCallback);
    $scope.userdet = {};
    $scope.ajaxcall = function () {
        console.log("2");
        //in place of url enter the url for api call 
        $http.post("http://blockard.burrow.io/Blockard/webapi/login", $scope.user)
            .then(function (response) {
                console.log(response)
                //$scope.details = response.data;
                //$scope.details[name_of_object]= response.body.value_of_key;
                console.log(response.data.phonenumber); //phone number
                console.log("5");

                return angular.fromJson(response.data);


            }, function (error) {
                console.log(error);
                return angular.fromJson(error);
            }).then(function (data) {


                console.log(data, "data here")
                $rootScope.details = data;

                console.log($rootScope.details)
                $rootScope.details = data;
                $scope.userdet = data;
                if (data.status === '-1') {
                    swal(Invalid Credentials);
                    $location.path('');
                    console.log('in error');
                } else {
                    $location.path('homepage');
                    console.log('in success');
                }
                /*$location.path('homepage')*/
                /* $rootScope.details = data;
 $scope.userdet = data;*/
                console.log($rootScope.details)
                $scope.ajaxcall1();
            })
    }
    console.log("3");
    $scope.viewCard = function () {
        console.log("papapa");
        //$scope.ajaxcall1();
        console.log($rootScope.details, "smile")
        console.log($scope.userdet)
        $scope.viewcardss = true;
        //$location.path('userdetail') 
    }


    $scope.checkif = function () {
        // you have to chnage this when u put it ona server 
        if (window.location.href === 'http://127.0.0.1:49987/index.html#/homepage') {
            $scope.viewcardss = !$scope.viewcardss;
        } else {
            $location.path('homepage')
        }
    }
    $scope.ajaxcall1 = function () {
        console.log("ratata");
        //in place of url enter the url for api call 
        $http.post("http://blockard.burrow.io/Blockard/webapi/cards", $rootScope.details)
            .then(function (response) {
                console.log(response);
                console.log("hgccykcydtrs");
                //$scope.details[name_of_object]= response.body.value_of_key;

                console.log(response.data[0].type);
                return angular.fromJson(response.data);


            }, function (error) {
                console.log(error);
                return angular.fromJson(error);
            }).then(function (data) {
                console.log("peevs2");
                //$scope.details.address= data.address;
                //             $scope.card.status= data.active_status;
                //             $scope.card.card_no= data.card_number;
                //             $scope.card.card_type= data.type;
                console.log(data, "helloo pv")
                for (var a = 0; a < data.length; a++) {
                    $rootScope.card.push(data[a]);
                }
                console.log($rootScope.card);
                $scope.cards = $rootScope.card;
                /* $scope.details.middle_name= data.middle_name;
                  $scope.details.phone_no= data.phonenumber;*/

            })
    }
    $rootScope.index = '';
    $scope.block = function (index) {
        console.log(index);
        console.log($rootScope.card[index])
        //          console.log($rootScope.card[index+1])
        //swal($rootScope.card[index]);
        $rootScope.index = index;
        $("#myModal").modal(index);
        $scope.finalBroker();
        //          swal({
        //                  title: 'Card Details',
        //                  type: 'info',
        //                  html:
        //                    'You can use <b>bold text</b>, ' +
        //                    {{card[index]}}',
        //                  showCloseButton: true,
        //                  showCancelButton: true,
        //                  confirmButtonText:
        //                    '<i class="fa fa-thumbs-up"></i> Great!',
        //                  cancelButtonText:
        //                    '<i class="fa fa-thumbs-down"></i>'
        //                }).then(function(index){
        //              
        //          })
    }
    //       $scope.consoler=function(){
    //     console.log($rootScope.card,"smack that");
    //     $scope.apply();
    // }
    //       $scope.hurray = function(){
    //           console.log("pvvvvvvvvvvvvvvvvvv")
    //       }
    $scope.unblock = function (index) {
        $("#myModal1").modal();
        console.log('dgukwqdh');
        $rootScope.index = index;
        console.log(index);
        $scope.finalUnbroker();

    }
    $scope.userdetail = function () {
        $location.path('userdetail');
    }
    $scope.ack = function () {
        $location.path('acknowledge');
    }
    $scope.logout = function () {
        $location.path('login');
    }
   }]);

myApp.controller('myCtrl3', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope, ) {
    $scope.options = ['Transaction Password', 'OTP']
    $scope.ajaxcall1 = function () {
        console.log("ratata");
        //in place of url enter the url for api call 
        $http.post("http://blockard.burrow.io/Blockard/webapi/cards", $rootScope.details)
            .then(function (response) {
                console.log(response);
                console.log("hgccykcydtrs");
                //$scope.details[name_of_object]= response.body.value_of_key;

                console.log(response.data[0].type);
                return angular.fromJson(response.data);


            }, function (error) {
                console.log(error);
                return angular.fromJson(error);
            }).then(function (data) {
                console.log("peevs2");
                //$scope.details.address= data.address;
                //             $scope.card.status= data.active_status;
                //             $scope.card.card_no= data.card_number;
                //             $scope.card.card_type= data.type;
                console.log(data, "helloo pv")
                for (var a = 0; a < data.length; a++) {
                    $rootScope.card.push(data[a]);
                }
                console.log($rootScope.card);
                $scope.cards = $rootScope.card;
                /* $scope.details.middle_name= data.middle_name;
                  $scope.details.phone_no= data.phonenumber;*/

            })
    }
    $scope.finalBroker = function () {
        $http.post('http://blockard.burrow.io/Blockard/webapi/block', $rootScope.card[$rootScope.index])
            .then(function (response) {
                console.log(response);
                setTimeout(function () {
                    $rootScope.card = [];
                    $scope.ajaxcall1();
                }, 1000)
                $('#myModal').modal('hide');
                console.log('hehehehheeheheh');
                $location.path('acknowledge');

            }, function (error) {
                console.log(error);
            });

    }
    $scope.finalUnbroker = function () {
        $http.post('http://blockard.burrow.io/Blockard/webapi/unblock', $rootScope.card[$rootScope.index])
            .then(function (response) {
                console.log(response, 'ctrl3');
                setTimeout(function () {
                    $rootScope.card = [];
                    $scope.ajaxcall1();
                    console.log('gfhdhdshd');
                }, 1000);
                console.log('hehehehheeheheh');
                $('#myModal1').modal('hide');
                $location.path('acknowledge1');

            }, function (error) {
                console.log(error);
            });

    }
    $scope.isVisible = false;
    $scope.isVisible1 = false;
    $scope.password = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }
    $scope.OTP = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible1 = $scope.IsVisible1 ? false : true;
    }
    $scope.go = function () {
        for (int i = 0; i < 2; i++) {
            if ($scope.unblockOptions[i] == 'OTP') {
                $scope.OTP();
            } else {
                $scope.password();
            }
        }

    }
      }]);
