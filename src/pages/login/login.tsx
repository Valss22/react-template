import {UserForm} from "../../components/user-form/UserForm";
import React from "react";

export const Login: React.FC = () => {
  return (
    <UserForm title={"Login"} url={"user/login/"}/>
  )
}
