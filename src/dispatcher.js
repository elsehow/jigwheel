var ud = require('ud')
// `dispatcher` is an app-wide event emitter 
// it is "defonce"d, meaning it persists over reloads
var EE = require('events').EventEmitter
var dispatcher = ud.defonce(module, 
                            () => new EE(), 
                            'dispatcher')

module.exports = dispatcher