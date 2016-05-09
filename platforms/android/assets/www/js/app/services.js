var _base = 'http://premium.yashdiqlubis.com/api/index.php/';

mlm.factory('Get', function ($http) {
	return {
		checkLogin: function (user, pass) {
			return $http({
	            method: 'POST',
	            data: {user: user, pass: pass},
	            url: _base + 'checkUser',
	            headers: { 'Content-Type': 'application/json' }
	        });
		}, submitCV: function (cv) {
			return $http({
	            method: 'POST',
	            data: {cv: cv},
	            url: _base + 'submitCV',
	            headers: { 'Content-Type': 'application/json' }
	        });
		}
	}
});