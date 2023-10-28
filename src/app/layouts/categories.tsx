import Link from "next/link";
import { FaListUl } from "react-icons/fa";
import config from "@/utils/config.json";

const Categories = () => {
  return (
    <aside className="p-4 col-span-3 bg-white rounded-md shadow-md">
      <h4 className="flex items-center gap-2 font-medium">
        <FaListUl />
        Categories
      </h4>

      <hr className="my-4" />

      <ul className="menu p-0 gap-2">
        {config.categories.map((category) => (
          <li key={category.slug}>
            <Link href={`/categories/${category.slug}`} className="w-full">
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Categories;
