# 高阶组件基本概念

#### 高阶组件就是接受一个组件作为参数并返回一个新组件的函数
#### 高阶组件是一个函数，并不是组件


# 为什么需要高阶组件
#### 多个组件都需要某个相同的功能，使用高阶组件减少重复实现
#### 比较著名的是 react-redux的connect
`
  export default connect(mapStateToProps, mapDispatchToProps)(Header)
`

# 编写高阶组件
#### 实现一个普通组件
#### 将普通组件使用函数包裹

# 函数包裹的2种方式
#### 直接通过函数包裹 如：B.js中
#### 通过修饰器的方式包裹 如：C.js中
[项目中如何添加修饰器](https://www.cnblogs.com/w-819/p/10047319.html)
