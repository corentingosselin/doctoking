import { AuthActionType } from "redux/actions/AuthActions";

const authError = {
    message: "",
};

const authErrorReducer = (state = authError, action) => {
    switch (action.type) {
        case AuthActionType.REGISTER_FAIL:
            return { message: action.payload };
        case AuthActionType.LOGIN_FAIL:
            return { message: action.payload };
        default:
            break;
    }
    return state;
};

export default authErrorReducer;