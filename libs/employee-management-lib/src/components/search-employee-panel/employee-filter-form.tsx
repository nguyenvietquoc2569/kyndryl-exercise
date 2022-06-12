import { getMonth, getYear, monthsList } from "@kyndryl-exercise/utils"
import { Button, SelectChangeEvent } from "@mui/material"
import { FC, useCallback } from "react"
import { useDispatch } from "react-redux"
import { useFilteredEmployees } from "../../hooks/filtered-employees-hook"
import { reduxEmpPageActionSetFilter } from "../../redux/employee-page/actions"
import { filterEmployeesInitvalue } from "../../redux/employee-page/type"
import { useTypedSelector } from "../../redux/store"
import InputSelector from "./input-seletor"

export const EmployeeFilterForm: FC = () => {
  const filterEmployees = useFilteredEmployees()
  const filters = useTypedSelector(state => state.empPage.filters)
  const dispatch = useDispatch()

  const handleChange = useCallback((e: SelectChangeEvent<string>) => {
    reduxEmpPageActionSetFilter(dispatch, {
      ...filters,
      [e.target.name]: e.target.value,
    })
  }, [dispatch, filters])

  const getMonthFromFilterEmployeed = useCallback(() => {
    return Array.from(new Set(
      filterEmployees.map((e) => {
        return getMonth(e)
      })
    )).sort((a, b) => {
      return monthsList.indexOf(a) - monthsList.indexOf(b)
    })
  }, [filterEmployees])
  
  const getYearFromFilterEmployeed = useCallback(() => {
    return Array.from(new Set(
      filterEmployees.map((e) => {
        return getYear(e).toString()
      })
    )).sort((a, b) => {
      return Number(a) - Number(b)
    })
  }, [filterEmployees])

  const getGenderFromFilterEmployeed = useCallback(() => {
    return Array.from(new Set(
      filterEmployees.map((e) => {
        return e.gender
      })
    ))
  }, [filterEmployees])

  const getStateFromFilterEmployeed = useCallback(() => {
    return Array.from(new Set(
      filterEmployees.map((e) => {
        return e.location.state
      })
    ))
  }, [filterEmployees])
  
  const resetFilter = () => {
    reduxEmpPageActionSetFilter(dispatch, filterEmployeesInitvalue)
  }
  

  return <>
    <InputSelector
        name="gender"
        label="Gender"
        value={filters.gender}
        options={getGenderFromFilterEmployeed()}
        onChange={handleChange}
      />
    <InputSelector
        name="month"
        label="Month"
        value={filters.month}
        options={getMonthFromFilterEmployeed()}
        onChange={handleChange}
      />
    <InputSelector
        name="year"
        label="Year"
        value={filters.year}
        options={getYearFromFilterEmployeed()}
        onChange={handleChange}
      />
    <InputSelector
        name="state"
        label="State"
        value={filters.state}
        options={getStateFromFilterEmployeed()}
        onChange={handleChange}
      />
    <Button onClick={resetFilter}>Reset Filter</Button>
  </>
}