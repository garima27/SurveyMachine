//Defined Angular Module
var surveyApp = angular.module('surveyApp', ['ngStorage']);

//Defined Controller, that have the functionality to ad records
surveyApp.controller('addUserCtrl', ['$scope','$localStorage','$sessionStorage',function($scope,$localStorage, $sessionStorage) {
    
        //Assigning $localstorage to $session.storage 
        $scope.storage = $localStorage;
    
       // Default Person details/records
        $scope.appTitle="Survey Application";//Survey Application
       
       
		$scope.personAr = [   
            {uName:"Ajay", uID:"3832", uEmail:"ajayd@synechron.com",uPass:"ajay4321", status: "Active", uType:"user",compName:"synechron"},
            {uName:"Garima", uID:"5832", uEmail:"garimas@synechron.com",uPass:"garima4321", status: "Active", uType:"admin",compName:"synechron"}
		];
    
         $scope.storage.saveddata = ( typeof $scope.storage.saveddata !== "undefined" ) ? $scope.storage.saveddata : $scope.personAr;
         $scope.personAr=$scope.storage.saveddata ;
    
        // To reset the fields after submit form
        $scope.Reset = function () {
            $scope.newName = '';
            $scope.newEmail = '';
            $scope.newPass = '';
            $scope.newStatus = '';
            $scope.newCompName = '';
        }

        
        $scope.addRecords = function () {
            //Will retun if form is inValid or blank
            if (!$scope.userForm.$valid) {
                return;
            }
            $scope.personAr.push({
                uName: $scope.newName,
                uID: $scope.newID,
                uEmail: $scope.newEmail,
                uPass: $scope.newPass,
                status: $scope.newStatus,
                uType: $scope.newUserType,
                compName: $scope.newCompName
            });
            //This saves the data to the local storage
            $scope.storage.saveddata=$scope.personAr;
    
             //console.log("Person Data:  "+$scope.personAr[$scope.personAr.length-1].name);
            // After submit data, blank all fields
            $scope.Reset();
        }

    
}]);
