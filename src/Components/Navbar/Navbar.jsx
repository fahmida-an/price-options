import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
    const [open, setOpen]= useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/product/:id', name: 'Product Detail' },
      ];
      
      
      
    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose>
                    : <AiOutlineMenu></AiOutlineMenu>
                }
                 {/* <AiOutlineMenu className="text-xl"></AiOutlineMenu> */}
            </div>
            <ul className={`md:flex absolute
            ${open ? '' : 'hidden'} bg-yellow-300 px-6 shadow-lg `}>
            {
                routes.map(route => <Link key ={route.id} route ={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;