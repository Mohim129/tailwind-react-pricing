import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from "lucide-react";


const navigationData = [
  {
    id: 1,
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 2,
    name: "Profile",
    url: "/profile",
  },
  {
    id: 3,
    name: "Settings",
    url: "/settings",
  },
  {
    id: 4,
    name: "Analytics",
    url: "/analytics",
  },
  {
    id: 5,
    name: "Help Center",
    url: "/help",
  },
];

const Navbar = () => {
  const [open, setOpen]=useState(false);

  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

    return (
      <nav className="flex justify-between mx-10 my-3  ">
        <span className="flex gap-4" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden z-10"></X>
          ) : (
            <Menu className="md:hidden z-10"></Menu>
          )}

          <ul
            className={`md:hidden 
            absolute duration-1000 text-black
            ${open ? "top-8 bg-amber-50" : "-top-40 "}
            
            z-0`}
          >
            {links}
          </ul>
          <h3 className="z-10">My Navbar</h3>
        </span>

        <ul className="md:flex hidden">
          {
            links
            // navigationData.map(route => <li className='mr-10'><a href={route.url}>{route.name}</a></li> )
          }
        </ul>

        <button>Sign In</button>
      </nav>
    );
};

export default Navbar;