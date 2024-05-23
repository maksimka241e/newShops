import React from "react";
import { BlockLinks } from "../../Home/links/links";
import { FooterBlock } from "../../Home/footer/footer";
import { BasketsContent } from "../component/basket/basket";

export function BasketsAllComponents(){
    return(
        <div>
            <BlockLinks></BlockLinks>
            <BasketsContent></BasketsContent>
            <FooterBlock></FooterBlock>
        </div>
    )
}