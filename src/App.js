import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { HomeAllComponents } from './Components/Home/homeComponents/homeComponents';
import { AboutAllComponents } from './Components/About/aboutComponents/aboutComponents';
import { ContactAllComponents } from './Components/Contact/contactComponents/contactComponents';
import { PaymentAllComponents } from './Components/Payment/paymentComponents/paymentComponents';
import { AuthorizationAllComponents } from './Components/Authorization/authorizationCompanents/authorizationCompanents';
import { FavouritesAllComponent } from './Components/Favourites/favoirutesComponents/favouritesComponents';
import { Registration } from './Components/Registration/Registration';
import { BasketsAllComponents } from './Components/Baskets/basketAll/basketAll';

function App() {
  return (
    <BrowserRouter basename='/newShops'>
    <div className="App">
        <Routes>
            <Route path="*" element={<HomeAllComponents></HomeAllComponents>}></Route>
            <Route path="/About" element={<AboutAllComponents></AboutAllComponents>}></Route>
            <Route path="/Payment" element={<PaymentAllComponents></PaymentAllComponents>}></Route>
            <Route path="/Contact" element={<ContactAllComponents></ContactAllComponents>}></Route>
            <Route path="/Authorization" element={<AuthorizationAllComponents></AuthorizationAllComponents>}></Route>
            <Route path="/Favourites" element={<FavouritesAllComponent></FavouritesAllComponent>}></Route>
            <Route path="/Registration" element={<Registration></Registration>}></Route>
            <Route path="/Baskets" element={<BasketsAllComponents></BasketsAllComponents>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
