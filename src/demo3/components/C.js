
import React, { Component } from 'react'
import C_png from '../images/C.png'
import A from './A'

@A
class C extends Component {
  getName = () => {
    return '我是C组件'
  }
  render() {
    return (
      <div>
        我是C组件
        <input type='text' {...this.props} />
        <br/>
        <img src={C_png} alt='' />
      </div>
    )
  }
}

export default C;