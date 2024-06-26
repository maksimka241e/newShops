import { useEffect, useState } from 'react';
import './blockLinks.css';
import { Link, Outlet } from "react-router-dom";


export function BlockLinks1(){
    const [sums, SetSum] = useState(() => {
        const req = JSON.parse(localStorage.getItem('basketItems'))
        return req !== null ? req.length  : 0
    })

    useEffect(() => {
        const user1 = JSON.parse(localStorage.getItem('basketSum')) || 0 
    }, [])

    useEffect(() => {
        localStorage.setItem('basketSum' ,JSON.stringify(sums))

    },[sums])


    return(
        <div className="BlockLinks1">
            <img className='BlockLinks1Img' src="https://new15945708035892.myaddshop.ru/img/250x0/1018/logo/logo_15946433853734.png" alt="img"/>
            <div className="BlockLinks2">
                <h3 className="BlockLinksMin2Title">8-480-953-70-65</h3>
                <div className="BlockLinksMin2">
                    <h3 className="BlockLinksMin2Money">{sums}</h3>
                    <Link to='/Baskets'><img src="https://webstockreview.net/images/grocery-clipart-grocery-item-13.png" alt="img"c className="BlockLinksMin2Img" /></Link>
                    <Outlet/>
                </div>
            </div>

        </div>
    )
}