import React from 'react'
// 继承方式的操纵props,这个一般用的不多
const modifyPropsHOC = Wrapcomponent => class NewComponent extends Wrapcomponent {
  // 调试时高阶组件显示的名称设置
  static displayName = `NewComponent(${getDisplayName(Wrapcomponent)})`
  // 修改生命周期
  componentWillMount() {
    console.log('我是修改后生命周期')
  }
  render() {
    const element = super.render()
    const newStyle = {
      color: element.type === 'div' ? 'red' : 'green'
    }
    const newProps = {...this.props, style: newStyle}
    return React.cloneElement(element, newProps, element.props.children)
  }
}

export default modifyPropsHOC

function getDisplayName(Wrapcomponent) {
  return Wrapcomponent.displayName || Wrapcomponent.name || 'Component'
}

// const message = Wrapcomponent => {
//   return class HOC extends Wrapcomponent {
//     componentDidMount() {
//       let messagess = document.createElement('div');
//       messagess.innerHTML = '<p style="position:fixed;top:100px;z-index:10;background-color:black">消息类高阶组件！</p>';
//       document.getElementsByTagName('body')[0].appendChild(messagess);
//     }
    
//     render() {
//       return super.render();
//     }
//   };
// };
// export default message;
