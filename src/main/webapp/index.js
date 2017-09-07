var myApp = angular.module("myApp", ["ngRoute"])
    .filter('status', function () {
        return function (value) {
            console.log(value);
            if (value == true)
                return 'active';
            else
                return 'inactive';
        }

    });

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./components/login.html",
            controller: 'myCtrl'
        })
        .when("/homepage", {
            templateUrl: "./components/homepage.html",
            controller: 'myCtrl2'
        })
        .when("/payment", {
            templateUrl: "./components/payment.html",
            controller: 'myCtrl4'
        })
        .when("/acknowledge", {
            templateUrl: "./components/acknowledge.html",
            controller: 'myCtrl'
        })
        .when("/history", {
            templateUrl: "./components/history.html",
            controller: 'myCtrl2'
        })
        .when("/acknowledge1", {
            templateUrl: "./components/acknowledge1.html",
            controller: 'myCtrl'
        })

        .when("/failPay", {
            templateUrl: "./components/failPay.html",
            controller: 'myCtrl'
        })
        .when("/successPay", {
            templateUrl: "./components/successPay.html",
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

myApp.controller('myCtrl', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {


    $scope.user = {
        username: '',
        password: ''
    }

    $scope.viewcardss = false;
    $rootScope.details = {};
    $rootScope.card = [];
    /*$scope.cards=[];*/
    console.log("sakakaka");

    $scope.login = function () {
        console.log("hello");
        //        if($scope.user.username==='' && $scope.user.password==='abcd'){
        //           

        $rootScope.ajaxcall();
    }
    $rootScope.ajaxcall1 = function () {
        console.log("ratata");

        //in place of url enter the url for api call 
        $http.post("http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/cards", $rootScope.details)
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

    console.log("heyyy") // api call will be made here 

    //$http.post('/someUrl', data, config).then(successCallback, errorCallback);
    $scope.userdet = {};
    $rootScope.ajaxcall = function () {
        console.log("2");
        if (!checkdata()) {

            if ($scope.user.username && $scope.user.password) {


                //in place of url enter the url for api call 
                $http.post("http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/login", $scope.user)
                    .then(function (response) {
                        console.log(response)
                        //$scope.details = response.data;
                        //$scope.details[name_of_object]= response.body.value_of_key;
                        console.log(response.data.phonenumber); //phone number
                        console.log("5");
                        var data = {
                            "user": $scope.user,
                            "data": angular.fromJson(response.data)
                        };
                        sessionStorage.setItem("user", JSON.stringify(data));

                        return angular.fromJson(response.data);


                    }, function (error) {
                        console.log(error);
                        $location.path("/")

                        //return angular.fromJson(error);
                        //window.alert("Invalid Login Credentials!");
                    }).then(function (data) {
                        loginProccessor(data);
                    })
            } else
                alert("The input fields cannot be left blank!");
        }
    }
    console.log("3");
    /* $scope.viewCard = function () {
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
         console.log("ratata");*/
    //in place of url enter the url for api call 
    /* $http.post("http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/cards", $rootScope.details)
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
                $scope.details.middle_name = data.middle_name;
                $scope.details.phone_no = data.phonenumber;

            })
    }
    //*/ // $scope.consoler=function(){
    //     console.log($rootScope.card,"smack that");
    //     $scope.apply();
    // }
    //       $scope.hurray = function(){
    //           console.log("pvvvvvvvvvvvvvvvvvv")
    //       }
    function loginProccessor(data) {
        console.log(data, "data here")
        $rootScope.details = data;
        console.log($rootScope.details)

        /* $location.path('homepage')*/
        $rootScope.details = data;
        $scope.userdet = data;
        console.log($rootScope.details)
        //console.log(data.status, "dhruviiiiiiiiiiii");
        //if (data.status == 500) {
        //  $location.path("/")
        //} else {
        $rootScope.ajaxcall1();
        $location.path("/homepage")
        //}
    }
    $scope.userdetail = function () {
        $location.path('userdetail');
    }
    $scope.ack = function () {
        $location.path('acknowledge');
    }
    $scope.logout = function () {
        $location.path('');
        sessionStorage.setItem("user", "");
    }
    $scope.payment = function () {
        $location.path('payment');
        sessionStorage.setItem("user", "");
    }

    function isNotNull(str) {
        if (str == null || str == "" || str == undefined) {
            return false;
        }
        return true;
    }

    function checkdata() {
        var userdata = sessionStorage.getItem("user");
        if (isNotNull(userdata)) {
            var data = JSON.parse(userdata);
            if (isNotNull(data.user.username) && isNotNull(data.user.password)) {
                $scope.user = data.user;
                loginProccessor(data.data);
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }

    }
    checkdata();


}]);


/* $scope.login = function () {
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
     $http.post("http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/login", $scope.user)
         .then(function (response) {
             console.log(response)
             //$scope.details = response.data;
             //$scope.details[name_of_object]= response.body.value_of_key;
             console.log(response.status);
             console.log(response.data.phonenumber); //phone number

             /* if (data.status === '-1') {
                  console.log("wrong combination");
                  $location.path('');
              } else {
                  $location.path('homepage');
              }
            /* console.log("5");

             return angular.fromJson(response.data);


         }, function (error) {
             console.log(error);
             return angular.fromJson(error);
         }).then(function (data) {


             console.log(data, "data here")
             $rootScope.details = data;

             console.log($rootScope.details)

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
 }*/
myApp.controller('myCtrl2', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {

    $scope.gotohistory = function () {
        $location.path('/history');
        console.log("hi");
    }
    $scope.checkif = function () {
        // you have to chnage this when u put it ona server 
        if (window.location.href === 'http://127.0.0.1:49987/index.html#/homepage') {
            $scope.viewcardss = !$scope.viewcardss;
        } else {
            $location.path('/homepage')
        }
    }
    $rootScope.ajaxcall1 = function () {

        console.log("ratata");
        //in place of url enter the url for api call 
        $http.post("http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/cards", $rootScope.details)
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
                $rootScope.card = [];
                for (var a = 0; a < data.length; a++) {
                    $rootScope.card.push(data[a]);
                }
                console.log($rootScope.card);
                $scope.cards = $rootScope.card;
                /* $scope.details.middle_name= data.middle_name;
                  $scope.details.phone_no= data.phonenumber;*/

            })
    }
    $scope.viewCard = function () {
        console.log("papapa");
        $rootScope.ajaxcall();
        $rootScope.ajaxcall1();
        console.log($rootScope.details, "smile")
        console.log($scope.userdet)
        $scope.viewcardss = true;

    }
    $rootScope.index = '';
    $scope.block = function (index) {
        console.log(index);
        console.log($rootScope.card[index])
        //          console.log($rootScope.card[index+1])
        //swal($rootScope.card[index]);
        $rootScope.index = index;
        $("#myModal").modal(index);
    }
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

    //       $scope.consoler=function(){
    //     console.log($rootScope.card,"smack that");
    //     $scope.apply();
    // }
    //       $scope.hurray = function(){
    //           console.log("pvvvvvvvvvvvvvvvvvv")
    //       }
    $rootScope.index = '';
    $scope.unblock = function (index) {
        console.log($rootScope.card[index])
        $rootScope.index = index;
        $("#myModal1").modal(index);
        console.log(index);

    }
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

myApp.controller('myCtrl3', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {
    $scope.options = ["Transaction Password", "OTP"];
    $scope.pass = '';
    $scope.otp = '';
    console.log("ratata");
    console.log($rootScope.card[$rootScope.index]);
    console.log($rootScope.card[$rootScope.index].active_status);
    /* $rootScope.ajaxcall1 = function () {
         console.log
         //in place of url enter the url for api call 
         //$http.post("http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/cards", $rootScope.details)
             .then(function (response) {
                 console.log(response);
                 console.log("hgccykcydtrs");
                 //$scope.details[name_of_object]= response.body.value_of_key;

                 console.log(response.data[0].type);
                 return angular.fromJson(response.data);


             }, function (error) {
                 console.log(error);
                 return angular.fromJson(error);
             //}).then(function (data) {
                 //console.log("peevs2");
                 //$scope.details.address= data.address;
                 //             $scope.card.status= data.active_status;
                 //             $scope.card.card_no= data.card_number;
                 //             $scope.card.card_type= data.type;
                 //console.log(data, "helloo pv")
                 //for (var a = 0; a < data.length; a++) {
                //     $rootScope.card.push(data[a]);
                // }
                 //console.log($rootScope.card);
                 $scope.cards = $rootScope.card;
                 /* $scope.details.middle_name= data.middle_name;
                   $scope.details.phone_no= data.phonenumber;*/

    //})
    //}*/
    if ($rootScope.card[$rootScope.index].active_status == false) {
        alert("card already blocked!")
    } else {
        $scope.finalBroker = function () {
            $http.post('http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/block', $rootScope.card[$rootScope.index])
                .then(function (response) {
                    console.log(response);
                    /* setTimeout(function(){
                             $rootScope.card=[];
                      $scope.ajaxcall1();
                     },10000)*/

                    $rootScope.card = [];
                    $rootScope.ajaxcall();
                    $rootScope.ajaxcall1();

                    $('#myModal').modal('hide');
                    console.log('hehehehheeheheh');
                    return response.json();
                }, function (error) {
                    console.log(error);
                    return error.json();
                }).then(function (data) {
                    $location.path('/acknowledge');
                })
        }
    }
    if ($rootScope.card[$rootScope.index].active_status == true) {
        alert("card is already unblocked")
    } else {
        if ($scope.unblockOptions = "OTP") {
            $scope.finalUnbroker = function () {
                $http.post('http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/unblock', $rootScope.card[$rootScope.index], $scope.otp)
                    .then(function (response) {
                        console.log(response);
                        $rootScope.card = [];
                        $rootScope.ajaxcall();
                        $rootScope.ajaxcall1();
                        console.log('hehehehheeheheh');
                        $('#myModal1').modal('hide');
                        $location.path('/acknowledge1');

                    }, function (error) {
                        console.log(error);
                    });
            }
        } else {
            $scope.finalUnbroker = function () {
                $http.post('http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/unblock', $rootScope.card[$rootScope.index], $scope.pass)
                    .then(function (response) {
                        console.log(response);
                        $rootScope.card = [];
                        $rootScope.ajaxcall1();
                        console.log('hehehehheeheheh');
                        $('#myModal1').modal('hide');
                        $location.path('acknowledge1');

                    }, function (error) {
                        console.log(error);
                    });
            }

        }
    }
    $scope.notShow = true;
    $scope.genOtp = function () {
        $scope.notShow = false;
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

        if ($scope.unblockOptions = "OTP") {
            $scope.OTP();
        } else {
            $scope.password();
        }

    }
                }]);


myApp.controller('myCtrl4', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {
    $scope.options = ["Transaction Password", "OTP"];
    $scope.card_type = '';
    $scope.pass = '';
    $scope.otp = '';
    $rootScope.card2 = {};
    console.log("in myCtrl4")
    $scope.typeChange = function () {
        //$rootScope.ajaxcall();
        console.log($scope.card_type)

        $rootScope.ajaxcall1();
        console.log($rootScope.card.length)
        for (var i = 0; i < $rootScope.card.length; i++) {
            if ($scope.card_type == $rootScope.card[i].type) {
                $rootScope.card2 = $rootScope.card[i];
                console.log($rootScope.card2)
            }
        }

    }
    $scope.notShow = true;
    $scope.genOtp = function () {
        $scope.notShow = false;
    }
    setTimeout(function () {
        if ($rootScope.card2.status == true) {
            if ($scope.unblockOptions = "OTP") {
                $rootScope.pay = function () {
                    //$scope.typeChange();
                    $http.post('http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/payment', {
                            'card2': $rootScope.card2,
                            'otp': $scope.otp
                        })
                        .then(function (response) {
                            console.log(response);

                            $rootScope.card = [];
                            //$rootScope.ajaxcall();
                            $rootScope.ajaxcall1();
                            $location.path('/successPay');
                        }, function (error) {
                            console.log(error);
                        });
                    //$rootScope.ajaxcall2();
                    //$location.path('/successPay');
                }
            } else {
                $rootScope.pay = function () {
                    $scope.typeChange();
                    $http.post('http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/payment', {
                            'card2': $rootScope.card2,
                            'pass': $scope.pass
                        })
                        .then(function (response) {
                            console.log(response);

                            $rootScope.card = [];
                            $rootScope.ajaxcall();
                            $rootScope.ajaxcall1();
                            $location.path('/successPay');
                        }, function (error) {
                            console.log(error);
                        });
                    //$rootScope.ajaxcall2();
                    // $location.path('/successPay');
                }
            }


        } else {
            $location.path('/failPay');
        }
    }, 500)

    /*  $rootScope.ajaxcall2 = function () {
          $http.post('http://blockard-2-env.ap-southeast-1.elasticbeanstalk.com/webapi/payment', $rootScope.card2, $rootScope.tPass)
              .then(function (response) {
                  console.log(response);

                  $rootScope.card = [];
                  $rootScope.ajaxcall();
                  $rootScope.ajaxcall1();

              }, function (error) {
                  console.log(error);
              });
      }*/
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

        if ($scope.unblockOptions = "OTP") {
            $scope.OTP();
        } else {
            $scope.password();
        }

    }
}]);
