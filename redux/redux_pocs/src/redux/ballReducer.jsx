let initialState={
    balls : 10 
}

export function ballReducer(state = initialState,action){
    switch(action.type){
        case "increment":
            return {
                balls : state.balls + 1 
            }
        case "decrement":
            return {
                balls : state.balls - 1 
            }
        default :
        console.log("wrong type") ;
    }
}
