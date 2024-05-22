import { Link, Outlet } from "react-router-dom";
import "./footer.css";

export function FooterBlock(){
    return(
    <div className="FooterBlockAllStyle">
        <div className="FooterBlock">
            <div className="FooterBlockMin1">
                <img className="FooterBlockMin1Img" src="https://new15945708035892.myaddshop.ru/img/150x0/1018/logo/logo_15946433853734.png" alt="img"></img>
                <p className="FooterBlockMin1Text">© 2024 ТелеБит</p>
                <p className="FooterBlockMin1TextAl1"> Политика конфиденциальности
Согласие на обработку персональных данных</p>
                <p className="FooterBlockMin1TextAl1">Используя данный сайт, вы автоматически принимаете условия пользовательского соглашения и соглашаетесь с политикой конфиденциальности.</p>
            </div>
            <div className="FooterBlockMin2">
                <h3 className="FooterBlockMin2Title">О магазине</h3>
                <Link to='/Home' className="FooterBlockMin2TitleAll">Главная</Link>
                <Link to='/About' className="FooterBlockMin2TitleAll">О компании</Link>
                <Link to='/Payment' className="FooterBlockMin2TitleAll">Доставка и оплата</Link>
                <Link to='/Contact' className="FooterBlockMin2TitleAll">Контакты</Link>
            </div>
            <div className="FooterBlockMin3">
                <h3 className="FooterBlockMin3Title">Прочее</h3>
                <Link to='/Authorization' className="FooterBlockMin2TitleAll">Авторизация</Link>
                <Link to='/Favourites' className="FooterBlockMin2TitleAll">Избранное</Link>
                <Link to='/Baskets' className="FooterBlockMin2TitleAll">Корзина</Link>
            </div>
            <Outlet/>
            <div className="FooterBlockMin4">
                <h3 className="FooterBlockMin4Title">Свяжитесь с нами</h3>
                <p className="FooterBlockMin4TextAll">101000, г.Москва, ул. Хачатуряна, владение 20, корп. 1</p>
                <p className="FooterBlockMin4TextAll">E-mail:support@phone.com</p>
                <p className="FooterBlockMin4TextAll">8-480-953-70-65</p>
            </div>
        </div>
    </div>
    )
}