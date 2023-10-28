import config from "@/utils/config.json";
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";
import {
  FaFacebookF,
  FaHeart,
  FaInfoCircle,
  FaInstagram,
  FaSearch,
  FaShoppingBag,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <section className="border-b p-3">
        <div className="container flex items-center justify-between">
          <div className="flex gap-4">
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="flex cursor-pointer items-center justify-center gap-2 text-sm"
              >
                Languages
                <AiFillCaretDown />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] w-52 rounded-sm bg-base-100 p-2 shadow"
              >
                <li>
                  <a>English</a>
                </li>
                <li>
                  <a>French</a>
                </li>
              </ul>
            </div>

            <div className="dropdown-hover dropdown">
              <label
                tabIndex={0}
                className="flex cursor-pointer items-center justify-center gap-2 text-sm"
              >
                Country
                <AiFillCaretDown />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] w-52 rounded-sm bg-base-100 p-2 shadow"
              >
                <li>
                  <a>Turkey (TL)</a>
                </li>
                <li>
                  <a>United States (USD)</a>
                </li>
              </ul>
            </div>

            <div className="dropdown-hover dropdown">
              <label
                tabIndex={0}
                className="flex cursor-pointer items-center justify-center gap-2 text-sm"
              >
                Quick help
                <AiFillCaretDown />
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] w-52 rounded-sm bg-base-100 p-2 shadow"
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

          {/* <div className="max-w-sm">
            <div className="alert gap-2 rounded-md bg-blue-500 p-2 text-sm text-white">
              <FaInfoCircle />
              <span>FREE SHIPPING FOR ALL ORDERS OF $340</span>
            </div>
          </div> */}

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
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            {config.title}
          </Link>

          <div className="flex w-full max-w-2xl gap-2">
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

      <ul className="flex items-center justify-center gap-6 bg-blue-600 p-4 text-sm text-white">
        {config.navigation.map((navLink) => (
          <Link
            key={navLink.id}
            href={navLink.href}
            className="flex items-center justify-center gap-2"
          >
            {/* <FaHome /> */}
            {navLink.label}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Header;
