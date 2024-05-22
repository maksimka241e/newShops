import "./style.css";
import { BlockLinks } from "../../Home/links/links";
import { FavouritesFalse } from "../favouritesFalse/favouritesFalse";
import { FooterBlock } from "../../Home/footer/footer";
import { FavouritesTrue } from "../favoTrue/favoTrue";

export function FavouritesAllComponent(){
    return(
        <div>
            <BlockLinks></BlockLinks>
            <div className="FavouritesBlock">
                <h3 className="FavouritesBlockTitle">Избранное</h3>
                {localStorage.getItem('TrueLogin') !== null ?  <FavouritesTrue/> : <FavouritesFalse/> }
            </div>
            <FooterBlock></FooterBlock>
        </div>
    )
}