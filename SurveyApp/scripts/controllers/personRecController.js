//Defined Angular Module
var assignMentApp = angular.module('surveyApp', []);

//Defined Controller, that have the functionality to ad records
assignMentApp.controller('addUserCtrl', ['$scope',function($scope) {

    
     // Default Person details/records
		$scope.personAr = [   
            {name:"Ajay Dixit", email:"ajayd@synechron.com",phonemodel:"Moto E 2nd Gen", status: "Active", purchasedate:"2016-12-01"},
            {name:"Arun Phad", email:"arunpd@synechron.com",phonemodel:"Moto G4", status: "Brand New", purchasedate:"2017-01-18"},
            {name:"Pandurang", email:"pandurangc@synechron.com",phonemodel:"Windows", status: "Positive", purchasedate:"2015-12-01"
            },
            {name:"Vikas Anand", email:"vikasa@synechron.com",phonemodel:"HTC", status: "Positive", purchasedate:"2014-12-01"
            }
		];
        // To reset the fields after submit form
        $scope.Reset = function () {
            $scope.newName = '';
            $scope.newEmail = '';
            $scope.newPhoneModel = '';
            $scope.newStatus = '';
            $scope.newPurchaseDate = '';
        }

        
        $scope.addRecords = function () {
            
            //Will retun if form is inValid or blank
            if (!$scope.userForm.$valid) {
                return;
            }
            $scope.personAr.push({
                name: $scope.newName,
                email: $scope.newEmail,
                phonemodel: $scope.newPhoneModel,
                status: $scope.newStatus,
                purchasedate: $scope.newPurchaseDate
            });
             //console.log("Person Data:  "+$scope.personAr[$scope.personAr.length-1].name);
           
            // After submit data, blank all fields
            $scope.Reset();
        }

    
}]);
