import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import authErrorReducer from './reducers/AuthErrorReducer';
import authReducer from './reducers/AuthReducer';
import doctorSearchReducer from './reducers/DoctorSearchReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    authState:authReducer,
    doctors: doctorSearchReducer,
    authError: authErrorReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

export default store;