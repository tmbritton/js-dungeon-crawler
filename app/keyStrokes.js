const keyStrokes = {
	addEventListeners: function() {
		window.addEventListeners('keypress', (event) => {
			const char = event.eyeCode;
			console.log(char);
			console.log('fgdfg');

			
			/*
			switch(char) {
				cas
			};
			*/

		});
	}
};

module.exports = {
	addEventListeners: keyStrokes.addEventListeners
}