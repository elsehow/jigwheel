var yo = require('yo-yo')

module.exports = (store) => {
  // a render fn that returns hyperscript
  return (state) => {
    return yo`<div>
      <h1>clicked ${state} times</h1>
      <button onclick=${handleClick}>click!!</button>
    </div>
    `

    function handleClick (ev) {
      store.dispatch({type: 'INCREMENT'})
    }
}
}
