import React from "react"

class ClassBased extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <p>Current Count</p>{this.state.count}
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }

}

export default ClassBased