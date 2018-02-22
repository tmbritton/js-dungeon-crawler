//import * as keyStrokes from 'keyStrokes';

document.addEventListener('DOMContentLoaded',function(){

	var stateMachine = {
		state: {
			frame: 0,
			second: 0,
			isPaused: false,
		},

		countSeconds: function() {
			window.setInterval(() => {
				if (!stateMachine.state.isPaused) {
					stateMachine.setSeconds(stateMachine.state.second + 1);
				}
			}, 1000);
		},

		init: function() {
			stateMachine.countSeconds();
			stateMachine.update();
		},

		setSeconds: function(num) {
			stateMachine.state.second = num;
		},

		update: function() {
			var secondElement = document.getElementById('second-counter');
			var frameElement = document.getElementById('frame-counter');
			stateMachine.state.frame = stateMachine.state.frame + 1;
			secondElement.innerHTML = ('Seconds: ' + stateMachine.state.second);
			frameElement.innerHTML = ('Frames: ' + stateMachine.state.frame);
			window.requestAnimationFrame(stateMachine.update);
		}
	}

	stateMachine.init();
});