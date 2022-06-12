import { useState } from 'react'

export function useHandelInput<T> (initialValues: T) : [T, (e: any) => void] {
  const [values, setValues] = useState<T>(initialValues)

  return [
    values,
    (e: any) => {
      setValues((vals: any) => {
        return {
          ...vals,
          [e.target.name]: e.target.value,
        }
      })
    },
  ]
}
