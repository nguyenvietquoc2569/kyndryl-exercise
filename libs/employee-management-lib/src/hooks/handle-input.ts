import { useState } from 'react'

interface EventType {
  target: {
    name: string,
    value: any
  }
}

export function useHandelInput<T> (initialValues: T) : [T, (e: EventType) => void] {
  const [values, setValues] = useState<T>(initialValues)

  return [
    values,
    (e: EventType) => {
      setValues((currentValues: T) => {
        return {
          ...currentValues,
          [e.target.name]: e.target.value,
        }
      })
    },
  ]
}
