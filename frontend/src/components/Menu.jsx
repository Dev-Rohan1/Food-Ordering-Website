import { useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FoodList } from "./FoodList";

const ITEMS_PER_PAGE = 8;
const MAX_VISIBLE_PAGES = 5;

const Menu = () => {
  const [category, setCategory] = useState("all");
  const [foodData, setFoodData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (menuName) => {
    const selected = menuName.toLowerCase();
    const newCategory = category === selected ? "all" : selected;
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const fetchFood = () => {
    if (category === "all") {
      setFoodData(food_list);
    } else {
      const filtered = food_list.filter(
        (item) => item.category.toLowerCase() === category
      );
      setFoodData(filtered);
    }
  };

  useEffect(() => {
    fetchFood();
  }, [category]);

  const totalPages = Math.ceil(foodData.length / ITEMS_PER_PAGE);
  const paginatedFood = foodData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getVisiblePageNumbers = () => {
    const start = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
    const end = Math.min(totalPages, start + MAX_VISIBLE_PAGES - 1);
    const pages = [];

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <section className="py-16">
      {/* Top section remains unchanged */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Explore Our Menu
        </h1>
        <p className="max-w-3xl text-sm md:text-base">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and provide you with a memorable
          dining experience, one delicious meal at a time.
        </p>
      </div>

      <ul className="flex flex-wrap gap-4 md:gap-8 pb-4 items-center justify-center mt-10">
        {menu_list.map((item, index) => (
          <li
            key={index}
            onClick={() => handleCategoryChange(item.menu_name)}
            className={`flex flex-col items-center mb-8 cursor-pointer ${
              category === item.menu_name.toLowerCase()
                ? "text-green-600 font-semibold"
                : ""
            }`}
          >
            <img
              className="w-16 h-16 md:w-20 md:h-20"
              src={item.menu_image}
              alt={item.menu_name}
            />
            <h2>{item.menu_name}</h2>
          </li>
        ))}
      </ul>

      <hr className="my-6" />
      <h1 className="text-2xl font-bold text-gray-800 mt-3 capitalize text-center">
        {category === "all" ? "Top Dishes Near You" : `${category} Dishes`}
      </h1>

      {paginatedFood.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No dishes found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {paginatedFood.map((food) => (
            <FoodList key={food._id} food={food} />
          ))}
        </div>
      )}

      {/* Pagination Section */}
      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
            </PaginationItem>

            {/* Dynamic Page Numbers */}
            {getVisiblePageNumbers().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
};

export default Menu;
