import React from "react"
import {useService} from "./hooks";


export const Registration: React.FC = () => {
  const service = useService()

  return (
    <div>
      <div>
        Registration
      </div>
      <input
        value={service.user.name}
        onChange={service.onChangeField("name")}
      />
      <input
        value={service.user.password}
        onChange={service.onChangeField("password")} type="password"
      />
    </div>
  )
}