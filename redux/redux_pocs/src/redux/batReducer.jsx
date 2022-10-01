
let initialState = {
    bat : 10,
    value : ""
}

export function batReducer(state = initialState,action){
    switch(action.type){
        case 'buy-bat' :
            return {
                bat : state.bat + Number(state.value),
                value : "" 
            }
        case 'sell-bat' :
            return {
                bat : state.bat - (state.value) ,
                value : ""
             }
        case 'set_value' :
            return {
                bat : state.bat ,
                value : action.payload
            }
        default : 
            return {
                bat : 10,
                value : ""
            }
    }
}