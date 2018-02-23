const mediator = require('mediator.js');

const counters = {
  init: () => {
    mediator.subscribe('update', (state) => {
      document.getElementById('second-counter').innerHTML = ('Seconds: ' + state.second);
      document.getElementById('frame-counter').innerHTML = ('Frames: ' + state.frame);
    });
  }
}

module.exports = {
  init: counters.init
}