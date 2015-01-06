define('configuration', [],
	function(){
		'use strict';

		var menuItems = [
			{ title: 'Dashboard', icon: 'flaticon-dwelling1', state:'dashboard'  },
			{ title: 'Devices', icon: 'flaticon-concentric', state:'devices'  },
			{ title: 'Locations', icon: 'flaticon-map44', state:'locations'  },
			{ title: 'Actions', icon: 'flaticon-two81', state:'actions'  },
			{ title: 'Activity', icon: 'flaticon-menu45', state:'activity'  }
		];

		return {
			applicationName: 'app',
			serviceBaseUrl: 'http://reqr.es',
			menuItems: menuItems
		};
	}
);

