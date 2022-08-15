import {ChangeEvent, useState} from "react";
import {BASE_URL} from "../../common/vars";

export const useRegistrationService = () => {
  const url = BASE_URL + "user/register/"
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

  const sendState = () => {
    console.log(JSON.stringify(user))
    fetch(url, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((response) => response.json())
      .then((data) => {console.log(data)})
  }


  return {
    user,
    onChangeField,
    sendState
  }
}