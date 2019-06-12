import React, { Component } from 'react';
import B_png from '../images/B.png'
import A from './A'

class B extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  changeInput = (e) => {
    // 这种受控组件的方式在ios上输入中文时会有问题，有2中解决方式用defalutValue改变为非受控组件,或者判断是不是中文输入
    // https://www.cnblogs.com/qingguo/p/5857923.html 受控组件和非受控组件的介绍
    this.setState({
      value: e.target.value
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        我是B组件
        <br/>
        {/*<input type='text' value={this.state.value} onChange={this.changeInput} /> */}
        <input type='text' {...this.props} />
        <br/>
        我的名字是：{this.props.name}
        <br/>
        我的年龄是：{this.props.age}
        <br/>
        我的性别是：{this.props.sex}
        <br/>

        <img src={B_png} alt='' />
      </div>
    )
  }
}

export default A(B);