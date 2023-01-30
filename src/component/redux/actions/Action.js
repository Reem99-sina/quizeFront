import { ActionTypes } from "../contants/action-types"
export const setUser = (userinfo) => {
    return {
        type: ActionTypes.SET_USER_NAME,
        payload: userinfo
    }
}
export const logoutUser = (userinfo) => {
    return {
        type: ActionTypes.LOGOUT
    }
}
export const setUserInfo = (setuserinfo) => {
    return {
        type: ActionTypes.SET_USER_INFO,
        payload:setuserinfo
    }
}
// export const selectedProducts = (product) => {
//     return {
//         type: ActionTypes.SELECTED_PRODUCTS,
//         payload: product
//     }
// }
// export const removeProductReducer = () => {
//     return {
//         type: ActionTypes.REMOVE_SELECTED_PRODUCT
//     }
// }
// export const searchProducts = (product) => {
//     return {
//         type: ActionTypes.SEARCH_PRODUCTS,
//         payload: product
//     }
// }

// export function increase() {
//     return {
//         type: ActionTypes.INC
//     }
// }
// export function decrease() {
//     return {
//         type: ActionTypes.DEC
//     }
// }
// export function addcart(data) {
//     return {
//         type: ActionTypes.addcart,
//         payload: data
//     }
// }
// export function deletecart(data) {
//     return {
//         type: ActionTypes.remove,
//         payload: data
//     }
// }
// export const displayCarts = () => {
//     return {
//         type: ActionTypes.DISPLAYCARTS,
//     }
// }