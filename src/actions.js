
var dispatcher = require('./dispatcher.js')

function setup (store) {
	dispatcher.on('button-click', (ev) => {
		store.n = store.n+1
    dispatcher.emit('update', store)
	}	)
	return
}

module.exports = setup
