# 概念

## 函数可以作为参数被传递
#### setTimeout是一个以函数为参数的高阶组件
`
setTimeout(() => {
  console.log(1)
}, 1000)
`

## 函数可以作为返回值输出 
`
funtion foo(x) {
  return funtion() {
    return x
  }
}
`