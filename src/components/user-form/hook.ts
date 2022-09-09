import {ChangeEvent, useState} from "react";
import {UserData, UserError} from "./types";
import {useHistory} from "react-router-dom"
import {BASE_URL} from "../../common";

export const useUserForm = (url: string) => {
  const [error, setError] = useState("")
  const [user, setUser] = useState({username: "", password: ""})
  const history = useHistory()

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
  const sendUserData = async () => {
    const response = await fetch(BASE_URL + url, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },
    })
    if (response.status !== 200) {
      const data: UserError = await response.json()
      setError(data.error)
    } else {
      const data: UserData = await response.json()
      window.localStorage.setItem("token", data.token)
      history.push("/main/")
    }
  }
  return {
    user,
    error,
    onChangeField,
    sendUserData
  }
}
