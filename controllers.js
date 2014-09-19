var phonecatApp = angular.module('phonecatApp',[]);
phonecatApp.controller('PhoneListCtrl', function($scope){
	$scope.phones = [
		{'name': 'Nexus S',
			'snippet': 'Fast Just got faster with Nexus S.'},
		{'name':'Motorola XOOM with Wi-Fi',
			'snippet': 'The Next, Next Generation tablet.'}
	]
});
