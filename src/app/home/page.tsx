"use client";
import {
  AiFillCaretDown,
  AiFillFacebook,
  AiFillHeart,
  AiFillInstagram,
  AiFillShopping,
  AiFillTwitterSquare,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSearch,
  FaShoppingBag,
  FaHeart,
  FaUserAlt,
  FaHome,
  FaInfo,
  FaPhone,
  FaQuestion,
  FaListUl,
} from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BannerSlider from "@/components/banner-slider";

type Props = {};

const Page = (props: Props) => {
  const [searchCategory, setSearchCategory] = useState("All");

  const onCategoryChange = (value: any) => {
    setSearchCategory(value);
  };

  return (
    <main className="space-y-4">
      <header>
        <section className="p-4 border-b">
          <div className="flex justify-between items-center">
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

        <section>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="font-bold text-xl">
                TechSuits
              </Link>

              <div className="flex w-full gap-2 max-w-2xl">
                <input
                  type="text"
                  placeholder="Search for product"
                  className="input input-bordered w-full"
                />

                <div className="dropdown">
                  <button className="btn btn-primary normal-case gap-2 flex items-center justify-center">
                    {searchCategory}
                  </button>
                  <ul className="p-2 shadow menu menu-sm dropdown-content z-[1] bg-base-100 rounded-sm w-52">
                    <li>
                      <button onClick={() => onCategoryChange("Accessories")}>
                        Accessories
                      </button>
                    </li>
                    <li>
                      <button onClick={() => onCategoryChange("Buds")}>
                        Buds
                      </button>
                    </li>
                    <li>
                      <button onClick={() => onCategoryChange("Laptops")}>
                        Laptops
                      </button>
                    </li>
                    <li>
                      <button onClick={() => onCategoryChange("All")}>
                        All
                      </button>
                    </li>
                  </ul>
                </div>

                <button className="btn btn-square text-lg btn-primary">
                  <FaSearch />
                </button>
              </div>

              <ul className="flex items-center justify-center gap-1">
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
          </div>

          <div className="p-4 bg-blue-800 text-white">
            <div className="flex gap-4 text-sm justify-center items-center">
              <Link
                href="/home"
                className="flex items-center justify-center gap-2"
              >
                <FaHome />
                Home
              </Link>
              <Link
                href="/home"
                className="flex items-center justify-center gap-2"
              >
                <FaInfo />
                About Us
              </Link>
              <Link
                href="/home"
                className="flex items-center justify-center gap-2"
              >
                <FaPhone />
                Contact
              </Link>
              <Link
                href="/home"
                className="flex items-center justify-center gap-2"
              >
                <FaQuestion />
                FAQ
              </Link>
            </div>
          </div>
        </section>
      </header>

      <section className="px-4">
        <div className="grid grid-cols-12 gap-4">
          <aside className="p-4 col-span-3 bg-white rounded-md">
            <h4 className="flex items-center gap-2 font-medium">
              <FaListUl />
              Categories
            </h4>

            <hr className="my-4" />

            <ul className="menu p-0 gap-2">
              <li>
                <Link href="/" className="w-full">
                  Women&apos;s Fashion
                </Link>
              </li>
              <li>
                <Link href="/" className="w-full">
                  Men&apos;s Fashion
                </Link>
              </li>
              <li>
                <Link href="/" className="w-full">
                  Phones & Techs
                </Link>
              </li>
              <li>
                <Link href="/" className="w-full">
                  Computers, Office & Security
                </Link>
              </li>
              <li>
                <Link href="/" className="w-full">
                  Consumer Electronics
                </Link>
              </li>
              <li>
                <Link href="/" className="w-full">
                  Jewelry and watches
                </Link>
              </li>
            </ul>
          </aside>

          <section className="col-span-7">
            <BannerSlider />
          </section>

          <div className="col-span-2 bg-green-200">
            <div className="w-full h-full rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 text-white p-4 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-xl">
                  Special Offer of The Day
                </h3>
                <p className="text-sm">
                  Limited stock, buy before they run out!
                </p>
              </div>

              <Link href="/" className="text-sm flex flex-col gap-4">
                <Image
                  src="/tv.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full object-cover h-full object-center"
                />
                <span>65&apos;&apos; UHD 4K Smart TV</span>
              </Link>

              <p className="text-sm">$239.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
