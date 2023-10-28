import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";
import {
  FaFacebookF,
  FaHeart,
  FaHome,
  FaInfo,
  FaInfoCircle,
  FaInstagram,
  FaPhone,
  FaQuestion,
  FaSearch,
  FaShoppingBag,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <section className="p-2 border-b">
        <div className="flex justify-between items-center container">
          <div className="flex gap-4">
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="cursor-pointer text-sm flex items-center justify-center gap-2"
              >
                Languages
                <AiFillCaretDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-100 rounded-sm w-52"
              >
                <li>
                  <a>English</a>
                </li>
                <li>
                  <a>French</a>
                </li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="cursor-pointer text-sm flex items-center justify-center gap-2"
              >
                Country
                <AiFillCaretDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-100 rounded-sm w-52"
              >
                <li>
                  <a>Turkey (TL)</a>
                </li>
                <li>
                  <a>United States (USD)</a>
                </li>
              </ul>
            </div>

            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="cursor-pointer text-sm flex items-center justify-center gap-2"
              >
                Quick help
                <AiFillCaretDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-100 rounded-sm w-52"
              >
                <li>
                  <a>Order tracking</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Find us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-sm">
            <div className="alert bg-blue-500 text-white p-2 gap-2 rounded-md text-sm">
              <FaInfoCircle />
              <span>FREE SHIPPING FOR ALL ORDERS OF $340</span>
            </div>
          </div>

          <ul className="flex items-center justify-center gap-3">
            <li>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="p-2">
        <div className="flex justify-between items-center container">
          <Link href="/" className="font-bold text-xl">
            TechSuits
          </Link>

          <div className="flex w-full gap-2 max-w-2xl">
            <input
              type="text"
              placeholder="Search for product"
              className="input input-bordered w-full"
            />

            <button className="btn btn-primary">
              <FaSearch />
              Search
            </button>
          </div>

          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link href="/" className="btn btn-circle btn-outline text-lg">
                <FaShoppingBag />
              </Link>
            </li>
            <li>
              <Link href="/" className="btn btn-circle btn-outline text-lg">
                <FaHeart />
              </Link>
            </li>
            <li>
              <Link href="/" className="btn btn-circle btn-outline text-lg">
                <FaUserAlt />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <ul className="flex gap-6 p-4 text-sm justify-center items-center bg-blue-600 text-white">
        <Link href="/home" className="flex items-center justify-center gap-2">
          <FaHome />
          Home
        </Link>
        <Link href="/home" className="flex items-center justify-center gap-2">
          <FaInfo />
          About Us
        </Link>
        <Link href="/home" className="flex items-center justify-center gap-2">
          <FaPhone />
          Contact
        </Link>
        <Link href="/home" className="flex items-center justify-center gap-2">
          <FaQuestion />
          FAQ
        </Link>
      </ul>
    </header>
  );
};

export default Header;
