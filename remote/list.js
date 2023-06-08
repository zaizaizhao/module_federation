//* 这个模块暴露给host使用
let wrap = document.createElement("div");
let list = [
  {
    name: "张三", age: 18
  },
  {
    name: "李四", age: 19
  }
];
list.forEach(item => {
  let p = document.createElement("p");
  p.innerText = `${item.name}---${item.age}`
  wrap.appendChild(p)
})

export const addList = () => {
  document.body.appendChild(wrap)
}