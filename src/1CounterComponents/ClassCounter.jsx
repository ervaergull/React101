import React from 'react'

class ClassCounter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div className="counter-container">
        <h1>Counter Using Class Components</h1>

        <div className="counter-content">
          <button onClick={this.decrementCount}>Decrement</button>
          <h2>{this.state.count}</h2>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      </div>
    )
  }

}

export default ClassCounter
