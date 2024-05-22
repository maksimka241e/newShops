import './contactContent.css'
import img from './contact.png'

export function ContactContent(){
    return(
        <div className='contactBlockAll'>
            <h3 className='contactBlockAllTitle'>Контакты</h3>
            <div className='contactBlockAllItem'>
            <h3 className='contactBlockAllTitle'>ООО ТелеБит – интернет-магазин современных телефонов</h3>
                <p className='contactAllText'>Мы находимся по адресу:</p>
                <p className='contactAllText'>129281, г.Москва, Олонецкий пр-д, 4К2</p>
                <p className='contactAllText'>Наш телефон: 8-480-953-70-65</p>
                <p className='contactAllText'>E-mail: support@appliances.com</p>
                <img className='contactAllImg' src={img} alt='img'/>
            </div>
        </div>
    )
}