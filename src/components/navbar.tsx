import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-base-100 p-0 sticky top-0 left-0 w-full shadow-sm z-50">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">TechSuits</a>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal gap-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Shop</Link>
            </li>
            <li>
              <Link href="/">Help</Link>
            </li>
            <li>
              <Link href="/">Login / Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
