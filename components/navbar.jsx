import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <div className='name'>Nikolaï ZLODEYEV</div>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
