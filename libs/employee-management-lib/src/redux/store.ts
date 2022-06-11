
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { IReduxState } from './state-type'
import { reduxReducers } from './reducers'


const store = createStore(combineReducers<IReduxState>(reduxReducers), applyMiddleware(thunk))
export default store

// https://react-redux.js.org/using-react-redux/static-typing#typing-the-useselector-hook
export const useTypedSelector: TypedUseSelectorHook<IReduxState> = useSelector