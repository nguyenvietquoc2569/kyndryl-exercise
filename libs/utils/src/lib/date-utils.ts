import { IEmployee } from "@kyndryl-exercise/employee-management-lib"

export const getMonth = (employee: IEmployee) => {
  const date = new Date(employee.dob.date)
  const monthName = Intl.DateTimeFormat('en-US', { month: 'long' }).format
  return monthName(date)
}

export const getYear = (employee: IEmployee) => new Date(employee.dob.date).getFullYear()
