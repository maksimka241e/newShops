import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./favouritesFalse.css";

export function FavouritesFalse(){
    return(
        <div>
            <p>Чтобы добавить что-то в избранное, необходимо <Link to="/Authorization">авторизоваться</Link>.</p><Outlet/>
        </div>
    )
}