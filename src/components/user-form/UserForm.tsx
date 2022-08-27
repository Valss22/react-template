import React from "react";
import style from "./UserForm.module.css"
import {useUserForm} from "./hook";
import {UserProps} from "./types";

export const UserForm = (props: UserProps) => {
  const userForm = useUserForm(props.url)

  return (
    <div className={style.container}>
      <div className={style.title}>
        {props.title}
      </div>
      <input
        className={style.name}
        placeholder="username"
        value={userForm.user.username}
        onChange={userForm.onChangeField("username")}
      />
      <input
        className={style.password}
        placeholder="password"
        value={userForm.user.password}
        onChange={userForm.onChangeField("password")}
        type="password"
      />
      <button
        className={style.button}
        onClick={userForm.sendUserData}
      >{props.title}</button>
      <div className={style.error}>{userForm.error}</div>
    </div>
  )
}