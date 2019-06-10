import React, {Component} from 'react'
import Timer from '../Components/Timer'


class TimerContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countdown: 5 * 60 * 1000
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        countdown: this.state.countdown - 1000
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }


  render() {
    const {countdown} = this.state
    return (
      <div style={this.props.style}>
        <Timer countdown={countdown / 1000}/>
      </div>
    )
  }
}

export default TimerContainer
