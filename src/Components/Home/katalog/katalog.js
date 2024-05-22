import './katalog.css';
import { KatalogBlockItem } from "./componets/katalogItem";
import { Smartphone } from './componets/smartphone/smartphone';
import { AboutSmart } from './componets/aboutSmart/aboutSmart';
export function KatalogBlockAll(){
    return(
        <div>
        <KatalogBlockItem></KatalogBlockItem>
        <Smartphone></Smartphone>
        <AboutSmart></AboutSmart>
        </div>
    )
}


