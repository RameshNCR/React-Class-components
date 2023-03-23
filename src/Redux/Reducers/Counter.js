import { INCREMENT, DECREMENT, RESET } from "../Types/CounterTypes"

const initialState = {
  count : 0
}

const Counter = (state = initialState, Action) => {
  switch(Action.type){
    case INCREMENT :
      return{
        count : state.count + Action.number
      }
    case DECREMENT:
      return {
        count : state.count - 1
      }
    case RESET :
      return {
        count : 0
      }
    default :
    return state
  }
}

export default Counter;