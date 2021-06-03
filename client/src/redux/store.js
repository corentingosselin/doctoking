import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import authErrorReducer from './reducers/AuthErrorReducer';
import authReducer from './reducers/AuthReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    authState:authReducer,
    authError: authErrorReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

export default store;