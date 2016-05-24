// deps
var yo = require('yo-yo')
var ud = require('ud')
var appEl = document.querySelector('#app')
function declare (fn, state) {
  let el = fn(state)
  appEl.appendChild(el)
  return el
}

// global app state is also defonced
var store = ud.defonce(module, require('./store.js'), 'store')
// the view function
var render = require('./view.js')(store)
// a function to run on reload
// a function to run on setup
function setup () {
  // clear the element html just in case
  appEl.innerHTML = ''
  // set up main-loop
	var el = declare(render, store.getState())
  // on changes to store, update main-loop
  store.subscribe(state =>  { // TODO state comes in on subscribe ? flux style ?
    yo.update(el, render(store.getState()))
  })
}

// TODO onready
setup()


// TODO major thing that bothers me...
// TODO state is coupled with the way its updated!!
// TODO a defonced state object is like an immutable state object
// TODO we cant mutate it directly! we mutate the ways in which it is updated
// TODO to me, why not make events a stream? we can do a macro of some sort

/*
  TODO heres my idea


  1: declaring the view

    let render = ud.defn(renderF(emitF))

  2: declaring the store

    let transformer = ud.defn(storeTrasnformer)
    streamFrom(emitF)
      .map(transformer, initalState)
      .onValue(state => {
        yo.update(el, render(state))
      })


  3: now transform works just like flux SHOULD ;)



  "keflux" heh
  major advantage is that hte state trasnform mechanism is now hotswappable

*/
