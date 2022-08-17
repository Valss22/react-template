import React from "react"
import {UserForm} from "../../components/user-form/user-form";

export const Registration: React.FC = () => {
  return (
    <UserForm title={"Registration"} url={"user/register/"}/>
  )
}