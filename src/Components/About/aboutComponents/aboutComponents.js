import { React } from "react";
import { BlockLinks } from "../../Home/links/links";
import { FooterBlock } from "../../Home/footer/footer";
import { AboutContent } from "../aboutContent/aboutContent";

export function AboutAllComponents(){
    return(
        <div>
            <BlockLinks></BlockLinks>
            <AboutContent></AboutContent>
            <FooterBlock></FooterBlock>
        </div>
    )
}