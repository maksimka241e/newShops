import { useState } from "react"
import { LoginModal } from "./loginModal/loginModal"

export function FormTrue(){
    const [modal,SetModal] = useState(false)

    const DeleteLog =() =>{
        SetModal(true)
        localStorage.removeItem('TrueLogin')
        
    }


    modal === true ? setTimeout(() => {
        SetModal(false)
        document.location.reload()},1400) : setTimeout(() => {SetModal(false)},100)


    return(
        <div className="BlockAuthorizationLoginTrue"> 
            {modal === false ? '' : <LoginModal/>}
            <h3 className="LoginMin1Title">Вход</h3>
            <h3>Вы в системе, чтобы выйти нажмите на кнопку</h3>
            <button className="BtnFalseLogin" onClick={() => DeleteLog()}>Выйти</button>
        </div>
    )
}