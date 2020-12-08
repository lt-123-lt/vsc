let defaultState = {
    isFetch:true,
    data:null,
    error:null
}
function Reducer(state=defaultState,action){
    let {type,payload} = action
    switch(type){
        case "FETCH_PRODUCT_REQUEST":
            return Object.assign({},state,{
                isFetch:true,
               
            })
        case "FETCH_PRODUCT_FAIL":
            return Object.assign({},state,{
                isFetch:false,
                error:payload.error
            })
        case "FETCH_PRODUCT_SUCCESS":
            return Object.assign({},state,{
                isFetch:false,
                data:payload.data
            })
        default :
        return {...state}
    }
    
}
export default Reducer