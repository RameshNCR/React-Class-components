import { INCREMENT, DECREMENT, RESET } from "../Types/CounterTypes"
export const Increment = (number=1) => {
  return {
    type : INCREMENT,
    number : number
  }
}

export const Decrement = () => {
  return {
    type : DECREMENT
  }
}

export const Reset = () => {
  return {
    type : RESET
  }
}