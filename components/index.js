const h = require('virtual-dom/h')
const hyperx = require('hyperx')
const hx = hyperx(h)
const input = require('./input')
const list = require('./list')

module.exports = worker => state => hx`
  <main>
    <h1>todo list</h1>
    <h3>leveldb in a webworker</h3>
    ${input(worker)}
    ${list(state)}
  </main>
`
