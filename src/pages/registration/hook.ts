import {ChangeEvent, useState} from "react";
import {BASE_URL} from "../../common/vars";
import {UserData, UserError} from "./types";

export const useRegistrationService = () => {
  const url = BASE_URL + "user/register/"
  const [error, setError] = useState("")
  const [user, setUser] = useState({username: "", password: ""})

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
  const sendUserData = () => {
    return fetch(url, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => {
        if (response.status !== 200) {
          return response.json()
            .then((data: UserError) => {
              setError(data.error)
            })
        }
        return response.json()
      })
      .then((data: UserData) => window.localStorage.setItem("token", data.token))
  }
  return {
    user,
    error,
    onChangeField,
    sendUserData
  }
}