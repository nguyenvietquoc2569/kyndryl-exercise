import { IEmployee, EReduxEmpPageAction, IFilterEmployees } from "./type"

export const reduxEmpPageActionSetShow = (employeeList: Array<IEmployee>) => {
  return ({
    type: EReduxEmpPageAction.SETSHOW,
    payload: {
      employeeList
    }
  })
}

export const reduxEmpPageActionSetCurrentEmployeeIndex = (id: string) => {
  return ({
    type: EReduxEmpPageAction.SETSHOWINDEX,
    payload: {
      currentEmployeeIndex: id
    }
  })
}

export const reduxEmpPageActionSetError = (errorMessage: string) => {
  return ({
    type: EReduxEmpPageAction.SETERROR,
    payload: {
      errorMessage
    }
  })
}

export const reduxEmpPageActionSetLoading = () => {
  return ({
    type: EReduxEmpPageAction.SETLOADING,
    payload: {
    }
  })
}

export const reduxEmpPageActionSetFilter = (filter: IFilterEmployees) => {
  return ({
    type: EReduxEmpPageAction.SETFILTER,
    payload: {
      filters: filter
    }
  })
}

export const reduxEmpPageActionToggleNewEmpModal = (isNewModalOpen: boolean) => {
  return ({
    type: EReduxEmpPageAction.TOGGLENEWEMPMODAL,
    payload: {
      isNewModalOpen: isNewModalOpen
    }
  })
}

export const reduxEmpPageActionAddNewEmp = (newEmployee: IEmployee) => {
  return ({
    type: EReduxEmpPageAction.ADDNEWEMPLOYEE,
    payload: {
      newEmployee
    }
  })
}