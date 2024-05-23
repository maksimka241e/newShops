import {React, useState, useEffect  } from "react";
import './favoTrue.css';
import { FavModal } from "../favModal/favModal";
import { KatalogModal } from "../../Home/katalog/componets/katalogModal/katalogModal";

export function FavouritesTrue(){
    const [modal,SetModal] = useState(false)
    const [modals,SetModals] = useState(false)
    const [favs, SetFavs] = useState(() => {
        const faves = JSON.parse(localStorage.getItem('favItem'))
        return faves !== null ? faves : []
    })

    const [basket,SetBasket] = useState(() => {
        const newBasket = JSON.parse(localStorage.getItem('basketItems'))
        return newBasket !== null ? newBasket : []
    })

    function DeleteItem(indexs){
     const newFavs = favs.filter((item, index) =>  index !== indexs)
        SetFavs([...newFavs])
        SetModal(true)
    }

    function AddItem(indexs){
        const newFav = favs[indexs]
        SetBasket([...basket, newFav])
        SetModals(true)
    }

    useEffect(() => {
        localStorage.setItem('favItem',JSON.stringify(favs))
        localStorage.setItem('basketItems',JSON.stringify(basket))
    },[favs,basket])

    modal === true ? setTimeout(() => {SetModal(false)},1400) : setTimeout(() => {SetModal(false)},100)
    modals === true ? setTimeout(() => {SetModals(false)},1400) : setTimeout(() => {SetModals(false)},100)


    return(
        <div className="FavouritesTrueBlockAll">
            {modal === false ? '' : <FavModal/>}
            {modals === false ? '' : <KatalogModal/>}
            {favs !== null  ?
            <div className="FavouritesTrueBlockAll">
                {favs.map((item, index) => (
                <div key={index} id={index} className="FavouritesTrueBlock">          
                    <img className="FavouritesTrueBlockImg"  src={item.img} alt="img"/>
                    <div className="FavFavouritesTrueBlocksTitles">
                        <h3 className="FavouritesTrueBlockTitle" key={item.title}>{item.title}</h3>
                        <h3 className="FavouritesTrueBlockText" key={item.prase}>{item.prase} руб.</h3>
                    </div>
                    <div className="FavouritesTrueBlockBtns">
                        <button className="FavouritesTrueBlockBtnDelete" onClick={() => DeleteItem(index)}>Удалить</button>
                        <button className="FavouritesTrueBlockBtnAdd" onClick={() => AddItem(index)}>Добавить в корзину</button>
                    </div>
                </div>
                ))}
            </div> :  <div><h3>Пока тут пусто</h3></div>
            }
        </div>
    )
}