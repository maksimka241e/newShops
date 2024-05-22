import { React } from "react";
import { BlockLinks } from "../../Home/links/links";
import { FooterBlock } from "../../Home/footer/footer";
import { ContactContent } from "../contactContent/contactContent";

export function ContactAllComponents(){
    return(
        <div>
            <BlockLinks></BlockLinks>
            <ContactContent></ContactContent>
            <FooterBlock></FooterBlock>
        </div>
    )
}