import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import { Button } from "./ui/button";
import { Minus, Plus, ShoppingBasket } from "lucide-react";

const Menu = () => {
  const [category, setCategory] = useState("all");
  const [foodData, setFoodData] = useState([]);
  const [foodModelData, setFoodModelData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleCategoryChange = (menuName) => {
    const selected = menuName.toLowerCase();
    const newCategory = category === selected ? "all" : selected;
    setCategory(newCategory);
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

  const openFoodModel = (id) => {
    const selectedFood = food_list.find((food) => food._id === id);
    if (selectedFood) {
      setFoodModelData(selectedFood);
      setQuantity(1);
    }
  };

  useEffect(() => {
    fetchFood();
  }, [category]);

  return (
    <section className="py-16">
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
      <h1 className="text-2xl font-bold text-gray-800 mt-3 capitalize">
        {category === "all" ? "Top Dishes Near You" : `${category} Dishes`}
      </h1>

      {foodData.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No dishes found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {foodData.map((food, index) => (
            <div key={index} className="border border-gray-200 p-3 rounded-lg">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-36 object-cover rounded-md"
              />
              <div className="text-center mt-5">
                <h3 className="font-semibold text-lg">{food.name}</h3>
                <p className="text-gray-500 font-medium">
                  Price: ${food.price}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => openFoodModel(food._id)}
                      className="rounded cursor-pointer hover:border hover:border-[#198057] hover:bg-[#198057] hover:text-white mt-2"
                      variant="outline"
                    >
                      Add to cart
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    {foodModelData && (
                      <div className="flex items-center flex-col md:flex-row gap-6 md:gap-8">
                        <div className="flex-1 bg-blue-100 p-5 rounded-lg md:w-full md:h-full">
                          <img
                            className="rounded-md md:w-full md:h-full"
                            src={foodModelData.image}
                            alt={foodModelData.name}
                          />
                        </div>
                        <div className="flex-1">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">
                              {foodModelData.name}
                            </DialogTitle>
                            <DialogDescription>
                              {foodModelData.description}
                            </DialogDescription>
                          </DialogHeader>

                          <span className="text-xl font-medium block mt-1">
                            Price: ${foodModelData.price}
                          </span>

                          <div className="mt-1">
                            <span className="text-lg font-medium block mb-1">
                              Quantity
                            </span>
                            <div className="flex items-center gap-3 mt-1 border rounded px-2 py-0.5 w-fit">
                              <span
                                className="cursor-pointer"
                                onClick={handleQuantityDecrease}
                                aria-label="Decrease quantity"
                              >
                                <Minus size={16} />
                              </span>
                              <span className="min-w-[20px] text-center">
                                {quantity}
                              </span>
                              <span
                                className="cursor-pointer"
                                onClick={handleQuantityIncrease}
                                aria-label="Increase quantity"
                              >
                                <Plus size={16} />
                              </span>
                            </div>
                          </div>

                          <Button
                            className="rounded cursor-pointer bg-[#198057] hover:text-white mt-4 gap-2"
                            aria-label="Add item to cart"
                          >
                            <ShoppingBasket size={18} /> Add To Cart
                          </Button>

                          <span className="text-sm mt-2 block">
                            <b className="text-base">Category</b>:{" "}
                            {foodModelData.category}
                          </span>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Menu;
