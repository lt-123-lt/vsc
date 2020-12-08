import react from "react"
class Dlrb extends react.Component{
    render(){
        return(
            <fieldset>
                <legend>热巴</legend>
                <ul>
                    <li>姓名 ： 热巴</li>
                    <li>爱好 :  吃迟迟</li>
                    <li>个性 : 笑笑笑</li>
                    <li>日常 : 吃吃吃</li>
                    <button onClick={()=>{
                       this.props.history.go(-1)
                    }}>返回</button>
                </ul>
            </fieldset>
        )
    }
}
export default Dlrb