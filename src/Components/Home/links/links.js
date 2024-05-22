import "./links.css";
import { Link, Outlet} from "react-router-dom";
import { BlockLinks1 } from "./blockLinks1/blockLinks1";
import { BlocksLinks2 } from "./blockLinks2/blockLinks2";

export function BlockLinks(){
    return(
    <>
        <div className="HomeLinksBLock">
            <div className="HomeLinksBLockMin1">
                <Link className='AllStyleTitle' to='/Home'>Главная</Link>
                <Link className='AllStyleTitle' to='/About'>О компании</Link>
                <Link className='AllStyleTitle' to='/Payment'>Доставка и оплата</Link>
                <Link className='AllStyleTitle' to='/Contact'>Контакты</Link>
            </div>
            <div className="HomeLinksBLockMin2">
                <Link className='AllStyleTitle' to='/Authorization'>Авторизация</Link>
                <Link className='AllStyleTitle' to='/Favourites'>Избранное</Link>
            </div> 
            <Outlet/>
        </div>
        <BlockLinks1/>
        <BlocksLinks2/>
    </>
    )
}