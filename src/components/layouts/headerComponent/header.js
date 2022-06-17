import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { menuItems } from '../menuItems';
const HeaderComponent = () => {
    const menus = menuItems.map(menu => {
        return (
            <div key={menu.key}>
                <RouterLink to={menu.link} className="item">{menu.name}</RouterLink>
            </div>
        )
    })
    return (
        <div className="ui secondary pointing menu">
            <RouterLink to="/" className="item">React Users</RouterLink>
            <div className="right menu">
                {menus}
            </div>
        </div>
    );
}

export default HeaderComponent;