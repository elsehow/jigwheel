var redux = require('redux')

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// function to setup initial app state
function setup () { 
  // put the schema for your app state here
	return redux.createStore(counter)
}

module.exports = setup
