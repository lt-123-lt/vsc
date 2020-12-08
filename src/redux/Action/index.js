import {getProduct} from "../Api/index"
function Creator (type,payload={}){
    return {type,payload}
}

function ProductAction (dispatch){
    dispatch(Creator("FETCH_PRODUCT_REQUEST"))
    getProduct()
    .then(res=>{
      setTimeout(()=>{
        dispatch(Creator("FETCH_PRODUCT_SUCCESS",{data:res.data}))
      },1500)
    })
    .catch(err=>{
        dispatch(Creator("FETCH_PRODUCT_FAIL",{data:null,error:err}))
    })
}
export default ProductAction