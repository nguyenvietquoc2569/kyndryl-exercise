import { getMonth, getYear } from '@kyndryl-exercise/utils'
import { IEmployee } from '../redux/employee-page/type'
import { useTypedSelector } from '../redux/store'

export const useFilteredEmployees = () => {
  const employees = useTypedSelector(state => state.empPage.employeeList)
  const filters = useTypedSelector(state => state.empPage.filters)

  const filteredEmployees = [...employees].filter((e: IEmployee) => {
    const month = filters.month ? getMonth(e) : ''
    const year = filters.year ? getYear(e) : ''
    const gender = filters.gender ? e.gender : ''

    const key = textNomalization(filters.text)

    const address = textNomalization(
                      (e.location.street.number || "") + 
                      (e.location.street.name || "") + 
                      (e.location.city || "") + 
                      (e.location.state || "") + 
                      (e.location.country|| "") + 
                      (e.location.postcode|| "")
                    )
    
    const name = textNomalization(`${e.name.title ? `${e.name.title}`:``}${e.name.first}${e.name.last}`)
    const email = textNomalization(`${e.email}`)

    return (month + year + gender === filters.month + filters.year + filters.gender) &&
            (
              address.includes(key) ||
              name.includes(key) ||
              email.includes(key)
            )
  }) 

  return filteredEmployees
}

function textNomalization (text: string) {
  return text.toLowerCase().replace(/ /g, '').replace(/,/g, '')
}
