import React from "react"

class ClassBasedTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: null
    };
  }

  componentDidMount() {
    console.log("Fetching data")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.setState({ todo: json })
      })
  }

  render() {
    return (
      <div>
        {this.state.todo &&
          <p>
            {this.state.todo.title}
          </p>
        }
      </div>
    )
  }

}

export default ClassBasedTodo;
