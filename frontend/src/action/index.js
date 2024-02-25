
export const productArray=(data)=>{

    return {
        type:"productarray",
        payload:data
    }
}

export const addToCart=(data)=>{

    return {
        type:"addtocart",
        payload:data
    }
}
export const auth=(data)=>{

    return {
        type:"auth",
        payload:data
    }
}
export const userData=(data)=>{

    return {
        type:"userdata",
        payload:data
    }
}