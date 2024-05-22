import './katalogItem.css';
import '../katalog.css';
import React, { useEffect, useState } from 'react';
import { dates } from "../data";
import { KatalogModal } from './katalogModal/katalogModal';

export function KatalogBlockItem(){
    const [modal,SetModal] = useState(false)
    const [fav,SetFav] = useState(() => {
        const faves = JSON.parse(localStorage.getItem('favItem'))
        return faves !== null  ? faves : []
    })

    useEffect(() => {
        localStorage.setItem('favItem', JSON.stringify([]));
        const user = JSON.parse(localStorage.getItem('favItem')) || [] 
    }, [])

    useEffect(() => {
        localStorage.setItem('favItem', JSON.stringify(fav))
    }, [fav])

    function SetAddFav(index){
        localStorage.getItem('TrueLogin') !== null ? Seting(index) :  console.log('автолизируйтесь чтобы добавить товар');
    }

    function Seting(index){
        SetFav([...fav, dates[index]]) 
        SetModal(true)
    }

    modal === true ? setTimeout(() => {SetModal(false)},1400) : setTimeout(() => {SetModal(false)},100)

    return(
        <div className="katalogBlockAll">
            <h3 className="katalogBlockTitleAll">Популярные товары</h3>
            {modal === false ? '' : <KatalogModal/>}
            <div className="katalogBlockAllItem">
                {dates.map((item, index) => 
                    <div className="katalogBlocksItem" key={index} id={index}>
                        <div className="projectsHover">
                            <div className="katalogBlockHover">
                                <img onClick={() => SetAddFav(index)} className='katalogBlockHoverImg katalogBlockHoverImg1' src='https://clipart-library.com/images_k/transparent-heart-icon/transparent-heart-icon-22.png' alt='heart'/>
                                <img className='katalogBlockHoverImg katalogBlockHoverImg2' src='https://webstockreview.net/images/grocery-clipart-grocery-item-13.png' alt='basket'/>
                            </div>
                            <img className="katalogBlockImg" src={item.img} id={index} alt={item.title}/>                        
                        </div>
                        <div className='katalogBlockContentTitle'>
                            <h3 key={item.title} className="katalogBlockTitle">{item.title}</h3>
                            <h3 key={item.prase} className="katalogBlockPrase">{item.prase} руб.</h3>
                        </div>
                        <button className='katalogBlockBtn'>Подробнее</button>
                    </div>
                )}
            </div>
        </div>
    )
}
