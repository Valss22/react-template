import style from "./Main.module.css"
import {Dialog} from "../../components/dialog/Dialog";

export const Main = () => {
  return (
    <div className={style.container}>
      <div className={style.dialogs}>
        <Dialog/>
      </div>
    </div>
  )
}