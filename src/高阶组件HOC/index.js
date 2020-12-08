import react from "react"
function Hoc (Wrapcomponent){
    return class HocChild extends react.Component{
        constructor(){
            super()
            this.state={
                name:"HERO",
                suit:"光头披风",
                attack:"100倍于己",
                goodness:"人人羡慕，强大的力量，可以保护身边的人，可以保护你想保护的人。"
            }
        }
        zx(){
            alert("我还没用力，你就倒下了！！")
        }
        render(){
            return(
                <Wrapcomponent {...this.state} zx={this.zx}></Wrapcomponent>
            )
        }
    }
}
export default Hoc