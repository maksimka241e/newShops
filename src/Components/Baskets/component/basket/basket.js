import {React, useEffect, useState   } from "react";
import './basket.css';
import { FavModal } from "../../../Favourites/favModal/favModal";
import { BlockResultContent } from "../result/result";

export function BasketsContent(){
    const [resultBl,SetResultBl] = useState(false)

    const [modal,SetModal] = useState(false)

    const [basket,SetBasket] = useState(() => {
        const newBasket = JSON.parse(localStorage.getItem('basketItems'))
        return newBasket !== null ? newBasket : []
    })

   const res = ((basket.reduce((a,v) =>  a = a + v.prase , 0 )))

    useEffect(() => {
        localStorage.setItem('basketItems',JSON.stringify(basket))
    },[basket])


    function DeleteItemBasket(indexs){
        const newBasket = basket.filter((item, index) => index !== indexs)
        SetBasket([...newBasket])
        SetModal(true)
    }

    modal === true ? setTimeout(() => {SetModal(false)},1400) : setTimeout(() => {SetModal(false)},100)
   
    return(
        <div className="BasketsBlockAll">
            {modal === false ? '' : <FavModal/>}
            <h3 className="BasketTitle">Корзина</h3>
            <div className="BasketBlockContent">
                <div className="BasketBlockItem">
                    {basket.map((item,index) => (
                        <div key={index} id={index} className="BasketTrueBlock">          
                        <img className="BasketTrueBlockImg"  src={item.img} alt="img"/>
                        <div className="BasketTrueBlocksTitles">
                            <h3 className="BasketTrueBlockTitle" key={item.title}>{item.title}</h3>
                            <h3 className="BasketTrueBlockText" key={item.prase}>{item.prase} руб.</h3>
                        </div>
                        <div className="BasketTrueBlockBtns">
                            <button className="BasketTrueBlockBtnDelete" onClick={() => DeleteItemBasket(index)}>Удалить</button>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="BlockResult">
                    <div>
                        <h3 className="BlockResultTitle">Итог: {res} руб.</h3>
                        <button className="BlockResultBtn" onClick={() => SetResultBl(true)}>Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}