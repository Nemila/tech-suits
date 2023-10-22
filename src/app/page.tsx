import BannerSlider from "@/components/banner-slider";
import ProductCard from "@/components/product-card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const fetchProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

type Product = {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="flex-1 p-4 bg-base-200">
      <div className="max-w-7xl mx-auto grid grid-cols-4">
        <aside className="p-4 col-span-1">
          <div className="bg-white p-4 rounded-md ">
            <h4 className="flex items-center gap-2 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
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
          </div>
        </aside>

        <section className="p-4 col-span-3 space-y-4">
          <BannerSlider />
          <div className="flex flex-col gap-8">
            <section className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Category Name</h3>
                  <p className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <Link href="/" className="btn btn-outline btn-sm normal-case">
                  See more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {products.slice(0, 8).map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
