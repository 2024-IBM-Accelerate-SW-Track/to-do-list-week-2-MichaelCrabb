import React, { Component } from "react";
import AddTodo from "../component/AddTodo.js";
import Todos from "../component/todos.js";
import Footer from "../component/footer.js";
import "./Home.css";

class Home extends Component {
  // A default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.
    
    // An array that contains the current array and the new todo item
    
    // Updates the local state with the new array.
    if (this.state.todos.find(t => t.content === todo.content)) {
      // If the todo item already exists in the list, do nothing and return
      return;
    } else {
      // If the todo item does not exist in the list, add it
      todo.id = Math.random();
      let new_list = [...this.state.todos, todo];
      this.setState({
        todos: new_list,
      });
    }
    
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  render() {
    return (
      <div className="Home">
        <Todos todos={[...this.state.todos]} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
        <h1>Todo List</h1>
        <Footer /> {this.footer}
      </div>
    );
  }
}

export default Home;
