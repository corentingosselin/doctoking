import axios from "axios";
import { AuthActionType } from "redux/actions/AuthActions";

const authState = {
    isLoggedIn: false,
    user: {
        "id": null,
        "email": "",
        "role": "",
        "gender": "",
        "phone": "",
        "first_name": "",
        "last_name": "",
        "city": "",
        "address": "",
        "token": ""
    }

};

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    if(!auth) return authState;
    const authObj = JSON.parse(auth);
    axios.defaults.headers.common["auth-token"] = authObj.token;
    return authObj;
}

const newAuth = getAuthState();
const authReducer = (state = newAuth, action) => {

    switch (action.type) {
        case AuthActionType.REGISTER_SUCCESS:
            const newAuthState = {
                isLoggedIn: false,
                user: action.payload,
            };
            localStorage.setItem("auth", JSON.stringify(newAuthState));
            return newAuthState;
        case AuthActionType.LOGOUT_SUCCESS:
            localStorage.removeItem("auth");
            return authState;
        case AuthActionType.LOGIN_SUCCESS:
            const loginAuthState = {
                isLoggedIn: true,
                user: action.payload,
            };
            axios.defaults.headers.common["auth-token"] = action.payload.token;
            localStorage.setItem("auth", JSON.stringify(loginAuthState));
            return loginAuthState;
        default:
            break;
    }


    return state;
};

export default authReducer;