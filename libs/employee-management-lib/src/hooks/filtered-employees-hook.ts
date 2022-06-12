import { getMonth, getYear } from '@kyndryl-exercise/utils'
import { useTypedSelector } from '../redux/store'

export const useFilteredEmployees = () => {
  const employees = useTypedSelector(state => state.empPage.employeeList)
  const filters = useTypedSelector(state => state.empPage.filters)

  const filteredEmployees = [...employees].filter((e) => {
    const month = filters.month ? getMonth(e) : ''
    const year = filters.year ? getYear(e) : ''
    const gender = filters.gender ? e.gender : ''
    const state = filters.state ? e.location?.state : ''
    return month + year + gender + state === filters.month + filters.year + filters.gender + filters.state
  }) 

  return filteredEmployees
}
