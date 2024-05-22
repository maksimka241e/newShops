import { React, useState } from "react";
import './loginComponent.css';
import { useForm } from "react-hook-form";
import { AuthorizationAllComponents } from "../../Authorization/authorizationCompanents/authorizationCompanents";
import { FormContent } from "../formContent/formContent";
import { FormContent2 } from "../formContent2/formContent2";
import { FormTrue } from "../loginTrue/loginTrue";

export function LoginAllComponents(){
    const [login,SetLogin] = useState(false)
    // передаем компонентам что мы зашли в систему
    // менять страничку когда зашли
    AuthorizationAllComponents(login)

    const {register,handleSubmit,formState:{errors},} = useForm()

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.login));
        if(userData){
            if(userData.password === data.password){
                console.log('Вы вошли в систему');
                SetLogin(true)
                localStorage.setItem('TrueLogin', 'ok')
                // написать чтобы потом можно пользовать
                // типо когда вошли работала избранное 
            } else{
                console.log('Неверно введён логин или пароль');
            }
        } else {
            console.log('Логин или пароль не совпадают с нашей запись');
        }
    }

    return(
    <div className="BlockAuthorizationLogin">
     {localStorage.getItem('TrueLogin') === null 
     ? <FormContent register={register} 
        handleSubmit={handleSubmit} 
        onSubmit={onSubmit} 
        errors={errors} /> 
     : <FormTrue/> }  
      {localStorage.getItem('TrueLogin') === null ? <FormContent2/> : <div></div>}
    </div> 
    )
}
