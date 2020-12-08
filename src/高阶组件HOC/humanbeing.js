import react from "react"
import Hoc from "./index"
class Human extends react.Component{
    constructor(){
        super()
        this.state={
            say:"救我呀，英雄"
        }
    }
    render(){
        console.log(this.props);
        let {name,attack,goodness,suit} =this.props
        return (
            <fieldset>
                <legend>正常人</legend>
               <p> name:{name}</p>
               <p> attack:{attack}</p>
               <p> suit:{suit}</p>
               <p> goodness:{goodness}</p>
            </fieldset>
        )
    }
}
export default  Hoc(Human)