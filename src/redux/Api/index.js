 export const getProduct =  ()=>
    fetch("data/index.json")
    .then(body => body.json())
