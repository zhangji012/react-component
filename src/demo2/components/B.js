import React, { Component } from 'react';
import B_png from '../images/B.png'
import A from './A'

class B extends Component {
  render() {
    return (
      <div>
        我是B组件
        <img src={B_png} alt='' />
      </div>
    )
  }
}

export default A(B);