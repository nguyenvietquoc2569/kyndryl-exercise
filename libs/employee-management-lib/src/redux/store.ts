
import { combineReducers } from 'redux'
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { IReduxState } from './state-type'
import { reduxReducers } from './reducers'


const store = configureStore({
  reducer: combineReducers<IReduxState>(reduxReducers), 
  middleware: new MiddlewareArray().concat(thunk)
})
export default store

// https://react-redux.js.org/using-react-redux/static-typing#typing-the-useselector-hook
export const useTypedSelector: TypedUseSelectorHook<IReduxState> = useSelector