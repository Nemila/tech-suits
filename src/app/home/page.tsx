"use client";
import BannerSlider from "@/components/banner-slider";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaEye, FaHeart, FaShoppingBag, FaSync } from "react-icons/fa";
import Categories from "../layouts/categories";

const Page = () => {
  return (
    <main className="py-6">
      <section className="container">
        <div className="grid grid-cols-12 items-start gap-8">
          <Categories />

          <section className="col-span-7">
            <BannerSlider />
          </section>

          <article className="col-span-2">
            <div className="flex h-full w-full flex-col gap-3 rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 p-4 text-white">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">
                  Special Offer of The Day
                </h3>
                <p className="text-sm">
                  Limited stock, buy before they run out!
                </p>
              </div>

              <Link href="/" className="group flex flex-col gap-4 text-sm ">
                <Image
                  src="/tv.png"
                  alt=""
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center transition-all group-hover:scale-110"
                />
                <span>65&apos;&apos; UHD 4K Smart TV</span>
              </Link>

              <p className="text-sm">$239.00</p>
            </div>
          </article>

          <aside className="col-span-2">
            <div className="flex h-full w-full flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Campaigns</h3>
                <button className="text-sm">Check all &rarr;</button>
              </div>

              <div className="flex-1">
                <Link
                  href="/"
                  className="group relative flex h-full min-h-[350px] w-full overflow-hidden rounded-md bg-cover bg-center p-6 text-white"
                >
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={500}
                    height={500}
                    className="absolute inset-0 h-full object-cover object-center transition-all group-hover:scale-110"
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
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Deals of The Day</h3>
              <p className="text-sm text-gray-600">
                Sale up to 30% off on selected items.
              </p>
            </div>

            <div className="grid h-full grid-cols-5 gap-4">
              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/ipad.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/ipad-back.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div
            className="col-span-12 flex h-24 items-center justify-between rounded-md bg-cover bg-fixed bg-center p-6 text-white"
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
                className="group flex flex-col items-center justify-center"
              >
                <div className="aspect-square w-full rounded-t-md border-2 p-4 group-hover:border-primary">
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">Gaming Laptops</p>
                </div>
              </Link>

              <Link
                href="/"
                className="group flex flex-col items-center justify-center"
              >
                <div className="aspect-square w-full rounded-t-md border-2 p-4 group-hover:border-primary">
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">Geek kit</p>
                </div>
              </Link>

              <Link
                href="/"
                className="group flex flex-col items-center justify-center"
              >
                <div className="aspect-square w-full rounded-t-md border-2 p-4 group-hover:border-primary">
                  <Image
                    src="/funko.png"
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">Figures</p>
                </div>
              </Link>

              <Link
                href="/"
                className="group flex flex-col items-center justify-center"
              >
                <div className="aspect-square w-full rounded-t-md border-2 p-4 group-hover:border-primary">
                  <Image
                    src="/ipad.png"
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">Ipads</p>
                </div>
              </Link>

              <Link
                href="/"
                className="group flex flex-col items-center justify-center"
              >
                <div className="aspect-square w-full rounded-t-md border-2 p-4 group-hover:border-primary">
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">IWatch</p>
                </div>
              </Link>

              <Link
                href="/"
                className="group flex flex-col items-center justify-center"
              >
                <div className="aspect-square w-full rounded-t-md border-2 p-4 group-hover:border-primary">
                  <Image
                    src="/earbuds.png"
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">Accessories</p>
                </div>
              </Link>

              <Link
                href="/"
                className="group flex flex-col items-center justify-center"
              >
                <div className="aspect-square w-full rounded-t-md border-2 p-4 group-hover:border-primary">
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">Headphones</p>
                </div>
              </Link>

              <Link
                href="/"
                className="group flex flex-col items-center justify-center"
              >
                <div className="aspect-square w-full rounded-t-md border-2 p-4 group-hover:border-primary">
                  <Image
                    src="/pc.png"
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">Laptops</p>
                </div>
              </Link>

              <Link
                href="/"
                className="group flex flex-col items-center justify-center"
              >
                <div className="aspect-square w-full rounded-t-md border-2 p-4 group-hover:border-primary">
                  <Image
                    src="/tv.png"
                    alt=""
                    width={500}
                    height={500}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">Tv & Monitors</p>
                </div>
              </Link>
            </div>
          </section>

          <section className="col-span-12 flex gap-6">
            <div className="flex flex-1 gap-6 rounded-md bg-white p-6 shadow-md">
              <div className="aspect-[4/3] w-1/2 rounded-md bg-gradient-to-tr from-[#fe8a39] to-[#fd3838] p-6 shadow-2xl shadow-[#fd3838]">
                <Image
                  className="h-full w-full object-contain object-center"
                  src="/iwatch.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">13-inch MacBook Air</h3>
                  <p className="flex gap-2 text-lg text-red-500">
                    <span className="font-medium line-through">$1,450.99</span>
                    <span>$1,050.99</span>
                  </p>
                  <p className="text-sm">In Stock: 63</p>
                </div>

                <ul className="flex flex-col gap-3 text-xs">
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

                <button className="btn bg-gradient-to-tr from-[#fe8a39] to-[#fd3838] normal-case text-white">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="flex flex-1 gap-6 rounded-md bg-white p-6 shadow-md">
              <div className="aspect-[4/3] w-1/2 rounded-md bg-gradient-to-tr from-[#fe8a39] to-[#fd3838] p-6 shadow-2xl shadow-[#fd3838]">
                <Image
                  className="h-full w-full object-contain object-center"
                  src="/gaming-laptop.png"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold">13-inch MacBook Air</h3>
                  <p className="flex gap-2 text-lg text-red-500">
                    <span className="font-medium line-through">$1,450.99</span>
                    <span>$1,050.99</span>
                  </p>
                  <p className="text-sm">In Stock: 63</p>
                </div>

                <ul className="flex flex-col gap-3 text-xs">
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

                <button className="btn bg-gradient-to-tr from-[#fe8a39] to-[#fd3838] normal-case text-white">
                  Add To Cart
                </button>
              </div>
            </div>
          </section>

          <section className="col-span-12">
            <div className="grid h-full grid-cols-6 gap-4">
              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/tv.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/tv.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/ipad.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/ipad-back.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/gaming-laptop.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/geek-kit.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/headphones.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-md border p-4">
                <Link
                  href="/home"
                  className="group flex aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="flex h-full w-full object-contain object-center group-hover:hidden"
                  />
                  <Image
                    src="/iwatch.png"
                    alt=""
                    width={500}
                    height={500}
                    className="hidden h-full w-full object-contain object-center group-hover:flex"
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

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaHeart />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaEye />
                    </button>
                    <button className="btn btn-circle btn-outline btn-sm">
                      <FaSync />
                    </button>
                  </div>

                  <button className="btn btn-circle btn-primary btn-sm">
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
