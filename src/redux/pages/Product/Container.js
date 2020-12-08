import react from "react"
// import store from "../../Store/index"
import action from "../../Action"
import ProductUi from "./Ui"
//connect 用于生产容器组组件 是一个高阶组件
import {connect} from "react-redux"
const mapStateToProps = (state)=>{
    console.log(state);
        return {
           product:state
        }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getWahaha(){
            // console.log("哇哈哈");
            dispatch(action)
        }
    }
}
class  Container extends react.Component {
    componentDidMount(){
        // store.dispatch(action)
        this.props.getWahaha()
    }
    
    render(){
        //this.props映射进来的
        // console.log(this.props);
        let{isFetch,data,error} = this.props.product
    
        // let {Product =  []} = store.getState()
        // console.log(Product);
        // console.log(store.getState());
        if(isFetch){
            return <h2>正在获取数据中...</h2>
        }else if(!isFetch && data){
            return  <ProductUi Product = {data}></ProductUi>
        }else if(!isFetch && error){

            return(
                <h2>获取数据失败</h2>
                // <ProductUi Product = {this.props.product}></ProductUi>
                   
                    /* <ul>
                       {store.getState().map(item =>{
                           return <li key={item.id}>
                              商品：<b>{item.title}</b>
                               -----
                               价格：<b>{item.price}</b>
                               -----
                               库存:<b>{item.inventory}</b>
                               -----
                               <button>按钮</button>
                               </li>
                       })}
                    </ul> */
               
            )
        }
    }
}
// export default Container
export default connect(mapStateToProps,mapDispatchToProps)(Container)