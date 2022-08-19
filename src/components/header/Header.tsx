import style from "./Header.module.css"
import React from "react";
import {useHistory} from "react-router-dom"


export const Header: React.FC = () => {
  const history = useHistory()
  return (
    <div className={style.header}>
      <span className={style.register}
            onClick={() => {
              history.push("/user/register/")}
            }>Register</span>
      <span>|</span>
      <span className={style.login}
            onClick={() => {
              history.push("/user/login/")}
            }>Login</span>
    </div>
  )
}
