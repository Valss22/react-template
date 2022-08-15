import React from "react"
import {useRegistrationService} from "../hook";
import style from "./component.module.css"

export const Registration: React.FC = () => {
  const registrationService = useRegistrationService()

  return (
    <div className={style.container}>
      <div className={style.title}>
        Registration
      </div>
      <input
        className={style.name}
        placeholder="username"
        value={registrationService.user.username}
        onChange={registrationService.onChangeField("username")}
      />
      <input
        className={style.password}
        placeholder="password"
        value={registrationService.user.password}
        onChange={registrationService.onChangeField("password")}
        type="password"
      />
      <button
        className={style.button}
        onClick={registrationService.sendState}
      >Register</button>
    </div>
  )
}