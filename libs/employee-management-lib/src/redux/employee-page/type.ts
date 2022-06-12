
export enum EReduxEmpPageStatus {
  LOADING,
  SHOWING,
  ERROR,
}

export interface IFilterEmployees {
  month: string,
  year: string,
  gender: string,
  text: string
}
export const filterEmployeesInitvalue: IFilterEmployees = {
  month: '',
  year: '',
  gender: '',
  text: ''
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

export const employeeInitialValue: IEmployee = {
  cell: '',
  dob: {
    date: '1955-08-15T20:20:20.625Z',
    age: 0
  },
  email: '',
  gender: 'unknown',
  id: { name: '', value: ''},
  location: {
    number: '',
    city: '',
    coordinates: {
      latitude: '',
      longitude: '',
    },
    country: '',
    postcode: '',
    state: '',
    street: '',
    timezone: {},
  },
  login: {},
  name: {
    first: '', last: '', title: ''
  },
  nat: '',
  phone: '',
  picture: {
    large: '',
    medium: '',
    thumbnail: ''
  },
  registered: {
    age: 0,
    date: ''
  }
}

export interface IReduxEmpPageState {
  status: EReduxEmpPageStatus,
  errorMessage: string,
  employeeList: Array<IEmployee>,
  currentEmployeeIndex: string,
  filters: IFilterEmployees,
  isNewModalOpen: boolean,
}

export enum EReduxEmpPageAction {
  SETLOADING= '@@EMPPAGESETLOADING',
  SETSHOW= '@@EMPPAGESETSHOWING',
  SETERROR = '@@EMPPAGESETERROR',
  SETSHOWINDEX = '@@EMPPAGESETINDEX',
  SETFILTER = ' @@SETFILTER',
  TOGGLENEWEMPMODAL = '@@TOGGLENEWEMPMODAL',
  ADDNEWEMPLOYEE = '@@ADDNEWEMPLOYEE'
}

export const reduxEmpPageInitState: IReduxEmpPageState = {
  status: EReduxEmpPageStatus.SHOWING,
  errorMessage: '',
  employeeList: [],
  currentEmployeeIndex: '',
  filters: filterEmployeesInitvalue,
  isNewModalOpen: false
}