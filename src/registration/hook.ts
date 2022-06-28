import {ChangeEvent, useState} from "react";

export const useRegistrationService = () => {
  const [user, setUser] = useState({name: "", password: ""})

  const onChangeField = (fieldName: keyof typeof user) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setUser(prevState => {
        return {
          ...prevState,
          [fieldName]: event.target.value
        }
      })
    }
  }
  return {
    user, onChangeField
  }
}