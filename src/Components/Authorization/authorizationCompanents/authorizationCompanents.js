import { React } from "react";
import { BlockLinks } from "../../Home/links/links";
import { LoginAllComponents } from "../../Login/loginComponents/loginComponent";
import { FooterBlock } from "../../Home/footer/footer";

export function AuthorizationAllComponents({index}){
    return(
        <div>
            <BlockLinks></BlockLinks>
        {index === true ? console.log('Вошли в систему') : <LoginAllComponents/> }    
        {/* написать странику когда зашли */}
           <FooterBlock></FooterBlock>
        </div>
        
    )
}