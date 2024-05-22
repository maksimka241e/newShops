import './paymentContent.css'

export function PaymentContent(){
    return(
        <div className='paymentBlockAll'>
            <h3 className='paymentBlockAllTitle'>Доставка и оплата</h3>
            <div>
                <h3 className='paymentBlockAllTitle'>СПОСОБЫ ОПЛАТЫ:</h3>
                <p className='paymentBlockAllText'>Наличный платёж — операции с денежной наличностью, которые проводятся физическими и юридическими лицами. Как правило, эти расчёты меньше по объёму по сравнению с безналичными расчётами. Размер наличного расчёта обычно устанавливается в законодательном порядке. К наличному расчёту относятся также выплаты предприятий, организаций, учреждений населению в виде заработной платы, стипендий, пенсий, пособий; поступления из финансовой системы; денежные расходы населения на товары и услуги; платежи финансовой системе. </p>
                <p className='paymentBlockAllText'>Безналичный платёж — платёж, осуществляемый между продавцом и покупателем при помощи банка путём перечисления денежных средств с банковских счетов.</p>
                <p className='paymentBlockAllText'>Безналичный платеж может быть отправлен с помощью Систем денежных переводов. При таком виде платежа для перевода денежных средств как продавцу так и покупателю не обязательно иметь банковский счет.</p>
                <p className='paymentBlockAllText'>Платёж электронными деньгами — платёж, осуществляемый при помощи платёжных инструментов электронных денег.</p>
                <img className='paymentBlockAllImg' src='https://new15945708035892.myaddshop.ru/img/800x0/1018/upload/dostavka_15946411434361.jpg' alt='img'/>
                <h3 className='paymentBlockAllTitle'>ВИДЫ ДОСТАВКИ:</h3>
                <p className='paymentBlockAllText'>Транспортно-экспедиционная компания (ТЭК) — компания, занимающаяся организацией перевозок грузов от грузоотправителя (клиента) к грузополучателю. В большинстве случаев ТЭК является компанией посредником между клиентом и перевозчиком, предоставляя услуги по поиску исполнителя и транспорта удовлетворяющим критерием перевозки груза. От компетентности и профессионализма данной компании зависит качество и своевременность перевозки грузов.</p>
                <p className='paymentBlockAllText'>Транспортно экспедиционная компания должна удовлетворять следующим требованием:</p>
                <p className='paymentBlockAllText'>Быстрая и четкая обработка поступающих заказов.</p>
                <p className='paymentBlockAllText'>Поиск и предоставления транспорта в заданные сроки.</p>
                <p className='paymentBlockAllText'>Неукоснительное соблюдение всех правил и условий транспортировки груза.</p>
                <p className='paymentBlockAllText'>Контроль за исполнением и информированием клиента о статусе перевозки груза.</p>
                <p className='paymentBlockAllText'>Формирование отчетности и прочих финансовых, сопроводительных документов.</p>
                <p className='paymentBlockAllText'>Строгое соблюдение законодательства.</p>
                <p className='paymentBlockAllText'>На текущий момент на рынке грузоперевозок представлено большое число малых и крупных транспортно экспедиционных компаний, но специфика рынка такова, что далеко не каждая компания или частный перевозчик способен выполнить эти требования по ряду причин, главная из которых — это отсутствие нужной квалификации и опыта работы в данной сфере.</p>
            </div>
        </div>
    )
}