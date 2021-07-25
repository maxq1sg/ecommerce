import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGOUT,
} from '../constants/userLoginConstants'
import axios from 'axios'


export const userLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            "Content-type": "application/json"
        }
        const { data } = await axios.post('/api/users/login', {
            email,
            password
        }, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
        const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: message
        })
    }
}

export const userLogoutAction = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({ type: USER_LOGOUT })
    
}