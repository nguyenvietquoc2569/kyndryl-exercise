
export enum EReduxEmpPageStatus {
  LOADING,
  SHOWING,
  ERROR,
}

export interface IEmployee {
  cell: string,
  dob: {
    date: string,
    age: number
  },
  email: string,
  gender: string,
  id: { name: string, value: string},
  location: {
    number: string
    city: string,
    coordinates: {
      latitude: string,
      longitude: string,
    },
    country: string,
    postcode: string,
    state: string,
    street: any,
    timezone: any,
  },
  login: any,
  name: {
    first: string, last: string, title: string
  },
  nat: string,
  phone: string,
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
  registered: {
    age: number,
    date: string
  }
}

export interface IReduxEmpPageState {
  status: EReduxEmpPageStatus,
  errorMessage: string,
  employeeList: Array<IEmployee>,
  currentEmployeeIndex: string,
}

export enum EReduxEmpPageAction {
  SETLOADING= '@@EMPPAGESETLOADING',
  SETSHOW= '@@EMPPAGESETSHOWING',
  SETERROR = '@@EMPPAGESETERROR',
  SETSHOWINDEX = '@@EMPPAGESETINDEX',
}

export const reduxEmpPageInitState: IReduxEmpPageState = {
  status: EReduxEmpPageStatus.SHOWING,
  errorMessage: '',
  employeeList: [],
  currentEmployeeIndex: ''
}