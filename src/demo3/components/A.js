import React, { Component } from 'react'
import '../index.css'

const A = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: ''
      }
    }
    onInputChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }
    // 可以操作被包裹组件的任意元素，但是一般建议不用
    refc = (instance) => {
      // instance.getName && alert(instance.getName())
    }
    render() {
      const { age, ...otherProps } = this.props
      const newProps = {
        value: this.state.value,
        onChange: this.onInputChange
      }
      return (
        <div className="wraper_A">
          我是A组件，我是公用部分
          <WrappedComponent sex={'男'} {...otherProps} ref={this.refc.bind(this)} {...newProps} />
        </div>
      )
    }
  }
}

export default A;
