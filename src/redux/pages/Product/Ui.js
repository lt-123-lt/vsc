function ProductUi (props){
    let {Product} = props
    return(
        <fieldset>
            <legend>Ui</legend>
            <ul>
                   {Product.map(item =>{
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
                </ul>
        </fieldset>
    )
}
export default ProductUi