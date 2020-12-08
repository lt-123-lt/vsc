import react from "react"
import {HashRouter as Router,Link,Route,Switch,withRouter} from "react-router-dom"
import My from "./pages/My"
import Girls from "./pages/Girls"
import Page404 from "./pages/Pages404"
class Container extends react.Component{
    render(){
        return(
            <fieldset>
                <legend>我的界面</legend>
                {/* <Router> */}
                <button onClick={()=>{this.props.history.push("/girls/oynn1")}}>翻牌真欧阳娜娜</button>
                    <Link to="/my">我的</Link>
                    |
                    <Link to="/girls">女孩们</Link>
                    <Switch>
                    <Route path ="/my" component={My}></Route>
                    <Route path ="/girls" component={Girls}></Route>
                    <Route path = "" component={Page404}></Route>
                    </Switch>
                {/* </Router> */}
            </fieldset>
        )
    }
}
export default withRouter(Container)