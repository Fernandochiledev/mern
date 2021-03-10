import React from "react";
import {  Link, NavLink} from "react-router-dom";
export default function NavBar() { 
      return (
        <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">Homes</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/categories" activeClassName="active">Categorias</NavLink>
          </li>
          <li>
            <NavLink to="/profile/asdasd" activeClassName="active">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/taskcrudmongo" activeClassName="active">Task Crud Mongo</NavLink>
          </li>
        </ul>
      </nav>
      )
   }