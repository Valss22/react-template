import React from "react"
import {UserForm} from "../../components/user-form/UserForm";

export const Registration: React.FC = () => {
  return (
    <UserForm title={"Register"} url={"user/register/"}/>
  )
}