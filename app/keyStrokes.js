const mediator = require('mediator.js');

const keyStrokes = {
	addEventListeners: () => {
		window.addEventListener('keypress', (event) => {
			const char = event.keyCode;
			
			switch(char) {
				case 32: // Space key
					mediator.publish('togglePause', {});
					break;
			};
			

		});
	}, 

	init: () => {
		keyStrokes.addEventListeners();
	}
};

module.exports = {
	init: keyStrokes.init
}