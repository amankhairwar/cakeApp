


export function Reducers(state={
    isLoggedin: localStorage.getItem("token")?true:false
},action){

    switch(action.type){
        case "LOGIN":{
            state = {...state}
            state.isLoggedin = true
            return state
        }

        default: return state
    }
    
}