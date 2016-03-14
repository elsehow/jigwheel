var h = require('virtual-dom/h')

module.exports = (store) => {
  // a render fn that returns hyperscript
  return function render (state) {
    return h('div', [
      h('h1', `clicked ${state} times`),
      h('button', { onclick: handleClick }, 'click')
    ])

    function handleClick (ev) {
      store.dispatch({type: 'INCREMENT'})
    }
}
}
