import { IEmployee, EReduxEmpPageAction, IFilterEmployees } from "./type"

export const reduxEmpPageActionSetShow = (dispatch: any, employeeList: Array<IEmployee>) => {
  dispatch({
    type: EReduxEmpPageAction.SETSHOW,
    payload: {
      employeeList
    }
  })
}

export const reduxEmpPageActionSetCurrentEmployeeIndex = (dispatch: any, id: string) => {
  dispatch({
    type: EReduxEmpPageAction.SETSHOWINDEX,
    payload: {
      currentEmployeeIndex: id
    }
  })
}

export const reduxEmpPageActionSetError = (dispatch: any, errorMessage: string) => {
  dispatch({
    type: EReduxEmpPageAction.SETERROR,
    payload: {
      errorMessage
    }
  })
}

export const reduxEmpPageActionSetLoading = (dispatch: any) => {
  dispatch({
    type: EReduxEmpPageAction.SETLOADING,
    payload: {
    }
  })
}

export const reduxEmpPageActionSetFilter = (dispatch: any, filter: IFilterEmployees) => {
  dispatch({
    type: EReduxEmpPageAction.SETFILTER,
    payload: {
      filters: filter
    }
  })
}

export const reduxEmpPageActionToggleNewEmpModal = (dispatch: any, isNewModalOpen: boolean) => {
  dispatch({
    type: EReduxEmpPageAction.TOGGLENEWEMPMODAL,
    payload: {
      isNewModalOpen: isNewModalOpen
    }
  })
}