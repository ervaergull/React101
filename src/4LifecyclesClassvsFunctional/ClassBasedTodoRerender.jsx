import React from "react"

class ClassBasedTodoRerender extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: null,
      pageIndex: 0
    }
  }

  increasePageIndex = () => {
    this.setState(prevState => ({
      pageIndex: prevState.pageIndex + 1,
    }));
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + this.state.pageIndex)
      .then(response => response.json())
      .then(json => {
        this.setState({ todo: json })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageIndex !== this.state.pageIndex) {
      this.fetchData()
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div>
        {this.state.todo &&
          <p>
            {this.state.todo.title}
          </p>
        }

        <p>PageIndex: {this.state.pageIndex}</p>
        <button onClick={this.increasePageIndex}>Fetch Next Page!</button>
      </div>
    )
  }

}

export default ClassBasedTodoRerender
