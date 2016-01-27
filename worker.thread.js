module.exports = self => {
  const level = require('level')
  const db = level('db')
  const state = require('./state.json')

  self.onmessage = ({data: {type, payload}}) => {

    const events = {
      start () {
        db.get('todos', (err, value) => {
          if (err) console.error(err)
          if (value) state.todos = value.split(',')
          self.postMessage(state)
        })
      },
      addTodo () {
        state.todos.push(payload)
        db.put('todos', state.todos, err => {
          if (err) console.error(err)
        })
      }
    }

    events[type]()
    self.postMessage(state)

  }
}
