import { React } from "react";
import { BlockLinks } from "../links/links";
import { FooterBlock } from "../footer/footer";
import { KatalogBlockAll } from "../katalog/katalog";

export function HomeAllComponents(){
    return(
        <div>
            <BlockLinks></BlockLinks>
            <KatalogBlockAll></KatalogBlockAll>
            <FooterBlock></FooterBlock>
        </div>
    )
}