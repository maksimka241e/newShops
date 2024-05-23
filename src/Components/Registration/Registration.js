import React, { useState }  from "react";
import { useForm } from "react-hook-form";
import "./Registartion.css";
import { BlockLinks } from "../Home/links/links";
import { FooterBlock } from "../Home/footer/footer";
import { RegistrationModal } from "./Component/regisModal/regisModal";
// import { Link, Outlet } from "react-router-dom";

export function Registration(){

    const [modal,SetModal] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        localStorage.setItem(data.login, JSON.stringify({ 
            login: data.login, password: data.password 
        }));
        SetModal(true)
        console.log(JSON.parse(localStorage.getItem(data.login)));
        // <Link to='/Authorization'></Link> <Outlet/>
      };

      modal === true ? setTimeout(() =>{
        SetModal(false) 
        window.location.href = 'https://maksimka241e.github.io/newShops/Authorization'
        
    },1400) : setTimeout(() => {SetModal(false)},100)

      return(
        <div>
        <BlockLinks></BlockLinks>
        <div className="BlockAuthorizationRegistration">
            {modal === false ? '' : <RegistrationModal/>}
            <div className="BlockRegistrationMin1">
            <h3 className="RegistrationMin1Title">Регистрация</h3>
            <form className="BlockRegistrationMin1Form" onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder="Логин" minLength='8' maxLength='14' {...register("login", {required:true})} className="RegistrationMin1Input" />
            {errors.login && <span style={{color:'red'}} className="LoginMin1Span">Неверно введён логин</span>}
            <input type="password" placeholder="Пароль" minLength='8' maxLength='14' {...register("password", {required:true})}  className="RegistrationMin1Input"/>
            {errors.password && <span style={{color:'red'}} className="LoginMin1Span">Неверно введён пароль</span>}
            <input type={"submit"} value="Зарегистрировать" className="RegistrationMin1InputBtn"/>
            
            </form>
            </div>
            <div className="BlockRegistrationMin2">
                <h3 className="RegistrationMin2Title">Зачем нужна регистрация?</h3>
                <p className="RegistrationMin2Text">Зарегистрировавшись на сайте, Вы сможете получить личный кабинет, что позволит Вам отслеживать историю заказов, быстрее оформлять заказы в нашем Интернет магазине. Вся информация о Вас будет доступна в любое время, и ее не нужно будет вводить повторно.</p>
            </div>
        </div>
        <FooterBlock></FooterBlock>
        </div>
    )
}