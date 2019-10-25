import React from "react"
import TodoItem from "./TodoItem.js"
import todosData from "./todosData.js"
import swal from 'sweetalert';
class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
    }
    console.log(<testerFile />)
  }

  handleChange = (id) => {
    let items = this.state.todos
    let item = items.find((itm) => {
      return itm.id === id
    })
    swal(item.text)
    this.setState(prevState => {
      const updatedState = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedState
      }
    })
  }


  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div style={{backgroundColor:"azure"}}>
        {todoItems}
      </div>
    )
  }
}

export default TodoApp