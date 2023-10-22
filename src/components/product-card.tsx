import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href="/"
      className="card max-w-[300px] card-compact bg-base-100 shadow-md"
    >
      <figure className="w-full h-60">
        <Image
          className="object-fill h-full w-full"
          src={product.image}
          alt="Shoes"
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title text-base line-clamp-1">{product.title}</h2>

          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>

            <p className="text-gray-600">+20,000 sold</p>
          </div>

          <p className="font-semibold text-lg">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
