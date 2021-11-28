import React from "react";

import "./navbar.css";

const Navbar = () => {
  const navLinkList = [
    { title: "Home", href: "/", id: "home" },
    { title: "Shop", href: "/", id: "shop" },
    { title: "Cart", href: "/", id: "cart" },
  ];

  return (
    <nav className='navbar'>
      <h1>E-shop</h1>
      <ul className='navbar-link-wrapper'>
        {navLinkList.map((navLink) => (
          <li className='navbar-list-item' key={navLink.id}>
            <a className='navbar-link' href={navLink.href}>
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
