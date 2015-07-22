define('configuration', [],
	function(){
		'use strict';

		var menuItems = [
			{ title: 'Hoteles', icon: 'flaticon-dwelling1', state:'hotels'  },
			{ title: 'Ayuda', icon: 'flaticon-concentric', state:'about'  }
		];

		var host = 'http://localhost:5000/api';

		return {
			applicationName: 'app',
			serviceBaseUrl: host,
			menuItems: menuItems
		};
	}
);

