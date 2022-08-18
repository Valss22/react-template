import React from "react";
import style from "./UserForm.module.css"
import {useUserFormService} from "./hook";
import {UserProps} from "./types";

export const UserForm: React.FC<UserProps> = (props) => {
  const userFormService = useUserFormService(props.url)

  return (
    <div className={style.container}>
      <div className={style.title}>
        {props.title}
      </div>
      <input
        className={style.name}
        placeholder="username"
        value={userFormService.user.username}
        onChange={userFormService.onChangeField("username")}
      />
      <input
        className={style.password}
        placeholder="password"
        value={userFormService.user.password}
        onChange={userFormService.onChangeField("password")}
        type="password"
      />
      <button
        className={style.button}
        onClick={userFormService.sendUserData}
      >{props.title}</button>
      <div className={style.error}>{userFormService.error}</div>
    </div>
  )
}