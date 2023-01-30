import { ActionTypes } from "../contants/action-types";

const initialState = {
    userinfo: ""
}// const count = 0
const initialstate= {
    userInfodata:{}
}

export const userinfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER_NAME:
            return {  userinfo: payload }
        case ActionTypes.LOGOUT:
            return null
        default:
            return state
    }
}
export const setuserinfo = (state = initialstate, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER_INFO:
            return { ...state,userInfodata:{...payload}}
        default:
            return state
    }
}
// export const searchProducts = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.SEARCH_PRODUCTS:
//             return { ...state, products: payload }
//         default:
//             return state
//     }
// }

// export function counter(prevState = count, action) {
//     switch (action.type) {
//         case 'INC':
//             return prevState + 1;
//         case 'DEC':
//             return prevState - 1;
//         default:
//             return prevState
//     }
// }

// export function cart(prevState = cartproduct, { type, payload }) {
//     switch (type) {
//         case ActionTypes.addcart: {
//             return { ...prevState, products: [...prevState.products, payload] }
//         }
//         case ActionTypes.remove: {
//             let data = prevState.products.filter((ele) => { return ele.id !== Number(payload) ? ele : '' })
           
//             return { ...prevState, products: data }
//         } 
//         default:
//             return prevState
//     }
// }

