import react from "react"
class Oynn extends react.Component{
    render(){
      let {params} =this.props.match
        console.log(this.props);
       if(params.id==1){
        return(
            <fieldset>
                <legend>娜娜1</legend>
                <ul>
                    <li>姓名 ： 欧阳娜娜</li>
                    <li>爱好 :  唱歌</li>
                    <li>个性 : 笑笑笑</li>
                    <li>日常 : 可爱</li>
                    <button onClick={()=>{
                       this.props.history.push("/girls")
                    }}>返回</button>
                </ul>
            </fieldset>
        )
       }else{
        return(
            <fieldset>
                <legend>娜娜2</legend>
                <ul>
                    <li>姓名 ： 假欧阳娜娜</li>
                    <li>爱好 :  也唱歌</li>
                    <li>个性 : 笑笑笑</li>
                    <li>日常 : 还可爱</li>
                    <button onClick={()=>{
                       this.props.history.go(-1)
                    }}>返回</button>
                </ul>
            </fieldset>
        )
       }
    }
}
export default Oynn