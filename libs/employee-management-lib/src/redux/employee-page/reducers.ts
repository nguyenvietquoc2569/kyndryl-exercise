import { Reducer } from 'redux';
import { IReduxEmpPageState, reduxEmpPageInitState, EReduxEmpPageAction, EReduxEmpPageStatus } from './type';

export const reduxEmpPageReducer: Reducer<IReduxEmpPageState> = (state = reduxEmpPageInitState, action) => {
  const { type, payload } = action
  switch (type) {
    case EReduxEmpPageAction.SETERROR:
      return {
        ...state,
        errorMessage: payload.errorMessage
      }
    case EReduxEmpPageAction.SETLOADING:
      return {
        ...state,
        status: EReduxEmpPageStatus.LOADING
      }
    case EReduxEmpPageAction.SETSHOW:
      return {
        ...state,
        status: EReduxEmpPageStatus.SHOWING,
        employeeList: payload.employeeList
      }
    case EReduxEmpPageAction.SETSHOWINDEX:
      return {
        ...state,
        currentEmployeeIndex: payload.currentEmployeeIndex
      }
    case EReduxEmpPageAction.SETFILTER:
      return {
        ...state,
        filters: payload.filters
      }
    case EReduxEmpPageAction.TOGGLENEWEMPMODAL:
      return {
        ...state,
        isNewModalOpen: payload.isNewModalOpen
      }
    default:
      return state
  }
}