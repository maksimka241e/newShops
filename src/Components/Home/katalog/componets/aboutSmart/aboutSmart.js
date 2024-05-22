import './aboutSmart.css'

export function AboutSmart(){
    return(
        <div className='AboutSmartBlockAll'>
            <div className='AboutSmartBlocks'>
                <img className='AboutSmartBlocksImg1' src='https://i.pinimg.com/originals/51/84/ec/5184ec7ef1ad8e3964d92975789cb9c1.png' alt='img'/>
                <p className='AboutSmartBlocksText'>Доставляем заказы по всей территории России</p>
            </div>
            <div className='AboutSmartBlocks'>
            <img className='AboutSmartBlocksImg2' src='https://www.clipartmax.com/png/full/359-3597783_security-shield-clipart-svg-protection-shield-icon-png.png' alt='img'/>
                <p className='AboutSmartBlocksText'>На всю продукцию предоставляется гарантия</p>
            </div>
            <div className='AboutSmartBlocks'>
            <img className='AboutSmartBlocksImg3' src='https://www.svgrepo.com/show/428357/credit-card.svg' alt='img'/>
                <p className='AboutSmartBlocksText'>Покупатель может оплатить заказ любым удобным способом</p>
            </div>
            <div className='AboutSmartBlocks'>
            <img className='AboutSmartBlocksImg4' src='https://static.tildacdn.com/tild3264-6463-4265-b839-356336663662/91b65bae60854deb2506.png' alt='img'/>
                <p className='AboutSmartBlocksText'>Широкий ассортимент телефонов от крупнейших поставщиков</p>
            </div>
        </div>
    )
}