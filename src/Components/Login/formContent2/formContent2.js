import { Link, Outlet } from "react-router-dom";

export function FormContent2(){
    return(
        <div className="BlockAuthorizationLoginMin2">
            <h3 className="LoginMin2Title">Я – новый покупатель</h3>
            <p className="LoginMin2Text">Регистрация на сайте позволит быстро оформлять заказы, управлять заказами через личный кабинет, в полном объеме использовать возможности нашего интернет магазина.</p>
            <Link to="/Registration" className="LoginMin2Link">Зарегистрироваться</Link>
            <Outlet/>
        </div>
    )
}