# 高阶组件应用

### 代理方式的高阶组件
返回新的组件直接继承自React.Component类，新组件扮演的角色传入参数组件的一个代理，在新组件的render函数中，将被包裹组件渲染出来，除了高阶组件自己要做得工作，其余全部转手给了被包裹的组件
#### 主要有这4个应用
1. 操作props
2. 抽取状态
3. 访问ref
4. 包装组件
`
export default () => WrappedComponent => class A extends Component {
  render() {
    const {...otherProps} = this.props
    return <WrappedComponent {...otherProps}>
  }
}
`

### 继承方式的高阶组件
采用继承关联作为参数的组件和返回的组件，假如传入的组件参数是WrappedComponent,那么返回的组件就直接继承自WrappedComponent
1. 操作props
2. 操纵生命周期函数
`
export default () => WrappedComponent => class A extends WrappedComponent {
  render() {
    const {user, ...otherProps} = this.props
    this.props = otherProps
    return super.render()
  }
}
`
### 一般使用代理方式的高阶组件

### 高阶组件显示名 getDisplayName

