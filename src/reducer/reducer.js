
import * as couter from "../action/action"
const reducer =(state=1,action)=>{
    console.log("this is reducer")
    switch(action.type){
        case couter.Increment:
            return ++state;
        case couter.Decrement:
            return --state
            default:
                return state;
    }

}

export default reducer