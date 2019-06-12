
import React, { Component } from 'react';
import D from './D'

@D
class E extends Component {
  componentWillMount() {
    console.log('我是原始生命周期')
  }
  render() {
  
    return (
      <div>
        我是E组件
      </div>
    )
  }
}

export default E