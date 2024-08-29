(function(){
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
		
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.lunchList;
		$scope.resultOfCheck;
		$scope.maxItems = 3;
		$scope.acceptableMsg = "Enjoy!";
		$scope.unacceptableMsg = "That's quite a lunch! You should consider reducing this list to " + $scope.maxItems + " items or fewer.";
		$scope.promptMsg = "Please enter your lunch items as a comma-separated list.";
		
		$scope.checkLunch = function CheckLunch()
		{
			if($scope.lunchList != "")
			{
				let itemList = $scope.lunchList.split(",");
				
				// Don't count empty strings
				const filteredList = itemList.filter(item => item.trim() !== "");
				$scope.resultOfCheck = (filteredList.length <= $scope.maxItems) ? $scope.acceptableMsg : $scope.unacceptableMsg;
			}
			else
			{
				$scope.resultOfCheck = $scope.promptMsg;
			}
		};
	}
	
})();

