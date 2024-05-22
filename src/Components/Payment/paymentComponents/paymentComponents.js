import { React } from "react";
import { BlockLinks } from "../../Home/links/links";
import { FooterBlock } from "../../Home/footer/footer";
import { PaymentContent } from "../paymentContent.js/paymentContent";

export function PaymentAllComponents(){
    return(
        <div>
            <BlockLinks></BlockLinks>
            <PaymentContent></PaymentContent>
            <FooterBlock></FooterBlock>
        </div>
    )
}