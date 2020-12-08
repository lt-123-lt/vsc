import react from "react"
let {Provider,Consumer} = react.createContext("我是默认值老铁！")
class A extends react.Component{
    constructor(){
        super()
        this.state={
            msg:"把我A中的值借给你玩一会"
        }
    }
    render(){
        return(
            <fieldset>
                <legend>A组件</legend>
                <Provider value={{gift:this.state.msg}}>
                <B></B>
                </Provider>
            </fieldset>
        )
    }
}

class B extends react.Component{
  
  render(){
    return(
      <fieldset>
          <legend>B组件</legend>
          <C></C>
      </fieldset>
    )
  }
}


class C extends react.Component{
  render(){
    return(
        // tip:当consumer外层没有provider的时候 那么就会是用context的默认值
      <Consumer>
          {/* consumer的使用方法与provider略有不同 写一个函数返回需要使用跨组件值的内容 参数就是provider传来的值 */}
          {
              (propsA)=>(
                <fieldset>
                    <legend>C组件</legend>
                    <h2>{propsA.gift}</h2>
                </fieldset>
              )
             
              
          }
      </Consumer>
    )
  }
}
export default A