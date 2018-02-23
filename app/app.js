var keyStrokes = require('./keyStrokes');
var counters = require('./counters');
var mediator = require('mediator.js');

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
					stateMachine.state.second = stateMachine.state.second + 1;
				}
			}, 1000);
		},

		init: function() {
			keyStrokes.init();
			counters.init();
			stateMachine.addSubscriptions();
			stateMachine.countSeconds();
			stateMachine.update();
		},

		addSubscriptions: function() {
			mediator.subscribe('togglePause', () => {
				if (stateMachine.state.isPaused) {
					stateMachine.state.isPaused = false;
				}
				else {
					stateMachine.state.isPaused = true;
				}
			})
		},

		update: function() {
			stateMachine.state.frame = stateMachine.state.frame + 1;
			mediator.publish('update', stateMachine.state);
			window.requestAnimationFrame(stateMachine.update);
		}
	}

	stateMachine.init();
});