function Concat (props){
    return(
        <fieldset>
            <legend>组合的用法</legend>
            <h1>你可能不知道我的厉害！</h1>
            <p>我是第一条内容</p>
            {props.children}
            {props.a}
            <p>我是第二条也是最后一条</p>
        </fieldset>
    )
}
export default Concat