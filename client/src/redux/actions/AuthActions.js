import toast from 'react-hot-toast';

const { default: axios } = require("axios");


const AuthActionType = {
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL"
};

const RegisterAuthAction = (userState, history, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("/auth/patient/register", userState);
            const { data } = res;
            dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
            toast.success('Création du compte terminée !');
            history.push("/login")
        } catch (error) {
            if (error.response) {
                dispatch({ type: AuthActionType.REGISTER_FAIL, payload: error.response.data.message });
                setErrorHandler({hasError:true, message: error.response.data.message});
                toast.error("Erreur lors de la création de votre compte");
            }
        }
    }
}


const LogoutAuthAction = () => {
    return async (dispatch) => {

        dispatch({ type: AuthActionType.LOGOUT_SUCCESS, payload: {} });
    }
}

const LoginAuthAction = (userState, history, setErrorHandler) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("/auth/login", userState);
            const { data } = res;
            dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
            toast.success("Vous êtes maintenant connecté");
            history.push("/")
        } catch (error) {
            if (error.response) {
                dispatch({
                    type: AuthActionType.LOGIN_FAIL,
                    payload: error.response.data.message
                });
                toast.success(error.response.data.message);

                setErrorHandler({hasError:true, message: error.response.data.message});
            }
        }
    }
}

export { RegisterAuthAction, AuthActionType, LoginAuthAction, LogoutAuthAction };