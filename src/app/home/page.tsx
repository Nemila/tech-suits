import BannerSlider from "@/components/banner-slider";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import {
  FaCheck,
  FaEye,
  FaHeart,
  FaListUl,
  FaShoppingBag,
  FaSync,
} from "react-icons/fa";
import Header from "../layouts/header";

const Page = () => {
  return (
    <main className="">
      <section className="container">
        <div className="grid grid-cols-12 gap-8">
          <aside className="p-4 col-span-3 bg-white rounded-md shadow-md">
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

          <article className="col-span-2">
            <div className="w-full h-full rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 text-white p-4 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-xl">
                  Special Offer of The Day
                </h3>
                <p className="text-sm">
                  Limited stock, buy before they run out!
                </p>
              </div>

              <Link href="/" className="text-sm flex flex-col gap-4 group ">
                <Image
                  src="/tv.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full object-cover h-full object-center group-hover:scale-110 transition-all"
                />
                <span>65&apos;&apos; UHD 4K Smart TV</span>
              </Link>

              <p className="text-sm">$239.00</p>
            </div>
          </article>

          <aside className="col-span-2">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Campaigns</h3>
                <button className="text-sm">Check all &rarr;</button>
              </div>

              <div className="flex-1">
                <Link
                  href="/"
                  className="relative flex w-full min-h-[350px] h-full rounded-md bg-cover bg-center overflow-hidden group p-6 text-white"
                >
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={500}
                    height={500}
                    className="inset-0 absolute h-full object-cover object-center group-hover:scale-110 transition-all"
                  />

                  <div className="relative z-10">
                    <p className="text-sm">Discounted</p>
                    <h3 className="font-medium">Latest campaign</h3>
                  </div>
                </Link>
              </div>
            </div>
          </aside>

          <section className="col-span-10 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-lg">Deals of The Day</h3>
              <p className="text-sm text-gray-600">
                Sale up to 30% off on selected items.
              </p>
            </div>

            <div className="grid grid-cols-5 h-full gap-4">
              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/ipad.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/ipad-back.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div
            className="col-span-12 rounded-md bg-cover h-24 bg-center p-6 flex items-center justify-between text-white bg-fixed"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1663691679737-d284e13f1aa2?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <h3 className="text-xl font-semibold">
              New generation Headphones are at Electron with limited stocks!
            </h3>

            <button>Check Products &rarr;</button>
          </div>

          <section className="col-span-12 flex flex-col gap-4">
            <div className="flex items-center justify-between ">
              <h3>Trend Categories</h3>
              <button>All Categories &rarr;</button>
            </div>

            <div className="grid grid-cols-9 gap-4">
              <Link
                href="/"
                className="flex flex-col justify-center items-center group"
              >
                <div className="w-full aspect-square p-4 border-2 rounded-t-md group-hover:border-primary">
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Gaming Laptops</p>
                </div>
              </Link>

              <Link
                href="/"
                className="flex flex-col justify-center items-center group"
              >
                <div className="w-full aspect-square p-4 border-2 rounded-t-md group-hover:border-primary">
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full object-contain object-center h-full"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Geek kit</p>
                </div>
              </Link>

              <Link
                href="/"
                className="flex flex-col justify-center items-center group"
              >
                <div className="w-full aspect-square p-4 border-2 rounded-t-md group-hover:border-primary">
                  <Image
                    src="/funko.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full object-contain object-center h-full"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Figures</p>
                </div>
              </Link>

              <Link
                href="/"
                className="flex flex-col justify-center items-center group"
              >
                <div className="w-full aspect-square p-4 border-2 rounded-t-md group-hover:border-primary">
                  <Image
                    src="/ipad.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full object-contain object-center h-full"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Ipads</p>
                </div>
              </Link>

              <Link
                href="/"
                className="flex flex-col justify-center items-center group"
              >
                <div className="w-full aspect-square p-4 border-2 rounded-t-md group-hover:border-primary">
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full object-contain object-center h-full"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">IWatch</p>
                </div>
              </Link>

              <Link
                href="/"
                className="flex flex-col justify-center items-center group"
              >
                <div className="w-full aspect-square p-4 border-2 rounded-t-md group-hover:border-primary">
                  <Image
                    src="/earbuds.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full object-contain object-center h-full"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Accessories</p>
                </div>
              </Link>

              <Link
                href="/"
                className="flex flex-col justify-center items-center group"
              >
                <div className="w-full aspect-square p-4 border-2 rounded-t-md group-hover:border-primary">
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full object-contain object-center h-full"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Headphones</p>
                </div>
              </Link>

              <Link
                href="/"
                className="flex flex-col justify-center items-center group"
              >
                <div className="w-full aspect-square p-4 border-2 rounded-t-md group-hover:border-primary">
                  <Image
                    src="/pc.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full object-contain object-center h-full"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Laptops</p>
                </div>
              </Link>

              <Link
                href="/"
                className="flex flex-col justify-center items-center group"
              >
                <div className="w-full aspect-square p-4 border-2 rounded-t-md group-hover:border-primary">
                  <Image
                    src="/tv.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full object-contain object-center h-full"
                  />
                </div>
                <div className="p-3">
                  <p className="font-medium text-sm">Tv & Monitors</p>
                </div>
              </Link>
            </div>
          </section>

          <section className="col-span-12 flex gap-6">
            <div className="flex-1 flex gap-6 bg-white shadow-md p-6 rounded-md">
              <div className="w-1/2 aspect-[4/3] p-6 bg-gradient-to-tr from-[#fe8a39] to-[#fd3838] rounded-md shadow-[#fd3838] shadow-2xl">
                <Image
                  className="w-full h-full object-contain object-center"
                  src="/iwatch.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-xl">13-inch MacBook Air</h3>
                  <p className="text-lg flex gap-2 text-red-500">
                    <span className="line-through font-medium">$1,450.99</span>
                    <span>$1,050.99</span>
                  </p>
                  <p className="text-sm">In Stock: 63</p>
                </div>

                <ul className="text-xs flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <FaCheck className="flex-shrink-0 text-green-600" />
                    Access smart tv apps without your PC or laptop
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="flex-shrink-0 text-green-600" />
                    Unlock a full PC experience with Wireless DeX and see movies
                    on the big screen with Tap view
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="flex-shrink-0 text-green-600" />
                    Work seamlessley with Microsoft 365 or use Remote PC to work
                    on your school or office PC
                  </li>
                </ul>

                <button className="btn text-white normal-case bg-gradient-to-tr from-[#fe8a39] to-[#fd3838]">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="flex-1 flex gap-6 bg-white shadow-md p-6 rounded-md">
              <div className="w-1/2 aspect-[4/3] p-6 bg-gradient-to-tr from-[#fe8a39] to-[#fd3838] rounded-md shadow-[#fd3838] shadow-2xl">
                <Image
                  className="w-full h-full object-contain object-center"
                  src="/gaming-laptop.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-xl">13-inch MacBook Air</h3>
                  <p className="text-lg flex gap-2 text-red-500">
                    <span className="line-through font-medium">$1,450.99</span>
                    <span>$1,050.99</span>
                  </p>
                  <p className="text-sm">In Stock: 63</p>
                </div>

                <ul className="text-xs flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                    <FaCheck className="flex-shrink-0 text-green-600" />
                    Access smart tv apps without your PC or laptop
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="flex-shrink-0 text-green-600" />
                    Unlock a full PC experience with Wireless DeX and see movies
                    on the big screen with Tap view
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="flex-shrink-0 text-green-600" />
                    Work seamlessley with Microsoft 365 or use Remote PC to work
                    on your school or office PC
                  </li>
                </ul>

                <button className="btn text-white normal-case bg-gradient-to-tr from-[#fe8a39] to-[#fd3838]">
                  Add To Cart
                </button>
              </div>
            </div>
          </section>

          <section className="col-span-12">
            <div className="grid grid-cols-6 h-full gap-4">
              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/tv.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/tv.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <hr className="my-2" />

                <div>
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <hr className="my-2" />

                <div className="flex justify-between items-center">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/ipad.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/ipad-back.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between border p-4 rounded-md">
                <Link
                  href="/home"
                  className="flex group w-full aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center flex group-hover:hidden"
                  />
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hidden group-hover:flex"
                  />
                </Link>

                <div className="border-t pt-4">
                  <p>Samsung Powerbank</p>
                  <p className="flex gap-2">
                    <span className="line-through">$87.99</span>
                    <span>$81.99</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-sm">In Stock: 47</p>
                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaHeart />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaEye />
                    </button>
                    <button className="btn btn-sm btn-circle btn-outline">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-sm btn-circle btn-primary">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Page;
