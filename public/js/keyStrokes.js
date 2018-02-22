const keyStrokes = {
	addEventListeners: function() {
		window.addEventListeners('keypress', function(event) => {
			const char = event.eyeCode;
			console.log(char);
			/*
			switch(char) {
				cas
			};
			*/

		});
	}
};

export {
	addEventListeners: keyStrokes.addEventListeners
}