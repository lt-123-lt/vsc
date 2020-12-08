import react from "react"
import Modal from "./motal"
class Portas extends react.Component{
    constructor(){
        super()
        this.state={
            isOpen:false,
            unMount:false
        }
    }
    open(){
        this.setState({
            isOpen:true
        })
    }
    close(){
        this.setState({
            isOpen:false
        })
    }
    unMount(){
        this.setState({
            unMount: !this.state.unMount
        })
    }
    render(){
    //     const modal = this.state.isOpen ? <Modal>
    //     <fieldset>
    //         <legend>我就是模态框</legend>
    //         <h3>俺终于出来了，哦，哈哈哈</h3>
    //         <button onClick={this.close.bind(this)}>关闭</button>
    //     </fieldset>
    // </Modal> : null
        return(
            <fieldset>
                <legend>那个，你好，模态框没出来前你就看看我吧</legend>
                <h3>从前有个姑娘叫小芳，长得水灵还漂亮，啦啦啦啦...</h3>
                <button onClick={this.open.bind(this)}>打开</button>
                <button onClick={this.unMount.bind(this)}>{this.state.unMount ? "装载组件" : "卸载组件"}</button>
                {this.state.unMount ? null : <Modal isOpen={this.state.isOpen} close={this.close.bind(this)}></Modal>}
            </fieldset>
        )
    }
}
export default Portas