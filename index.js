const work = require('webworkify')
const main = require('main-loop')
const worker = work(require('./worker.thread.js'))
const app = require('./components/index.js')(worker)
const state = require('./initState.js')
const loop = main(state, app, require('virtual-dom'))
document.body.appendChild(loop.target)

worker.onmessage = ({data: state}) => loop.update(state)
worker.postMessage({type: 'start'})

