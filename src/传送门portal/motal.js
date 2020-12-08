import react from "react"
import ReactDOM from "react-dom"
class Modal extends react.Component{
    constructor(){
        super()
        
        this.root=document.createElement("div")
    }
    componentDidMount(){
        this.root.id="roots"
    
        document.body.appendChild(this.root)
    }
    componentWillUnmount(){
        
    
        document.body.removeChild(this.root)
    }
    
    render(){
        let content = (<fieldset>
            <legend>我就是模态框</legend>
            <h3>俺终于出来了，哦，哈哈哈</h3>
            <button onClick={this.props.close}>关闭</button>
        </fieldset>)
        // return ReactDOM.createPortal(
        //     this.props.children,
        //     this.root
        // )
       return  this.props.isOpen ?  ReactDOM.createPortal(content,this.root) : null
    }
}
export default Modal