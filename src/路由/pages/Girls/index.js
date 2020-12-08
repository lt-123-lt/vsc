import react from "react"
import {Link,Route,Redirect} from "react-router-dom"
import Dlrb from "./Dlrb"
import Oynn from "./Oynn"
class Girls extends react.Component{
    render(){
        // console.log(this.props);
        return(
            <fieldset>
                <legend>我的女孩</legend>
                <ul>
                   <Link to="/girls/dlrb"> <li> 迪丽热巴 </li></Link>
                    <li> 古力娜扎 </li>
                   <Link to="/girls/oynn2"> <li> 欧阳娜娜 </li></Link>
                   <Link to="/girls/oynn1"> <li> 假欧阳娜娜 </li></Link>
                    <li> 翻牌子不喽 </li>
                </ul>
                <Route path="/girls/dlrb" component={Dlrb}></Route>
                <Route path="/girls/oynn:id" component={Oynn}></Route>
                <Redirect from="/girls" to="/girls/dlrb"></Redirect>

            </fieldset>
        )
    }
}
export default Girls