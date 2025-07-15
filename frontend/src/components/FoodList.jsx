import { food_list } from "@/assets/assets";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Minus, Plus, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const FoodList = ({ food }) => {
  const [foodModelData, setFoodModelData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const openFoodModel = (id) => {
    const selectedFood = food_list.find((food) => food._id === id);
    if (selectedFood) {
      setFoodModelData(selectedFood);
      setQuantity(1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div key={food._id} className="border border-gray-200 p-3 rounded-lg">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-36 object-cover rounded-md"
      />
      <div className="text-center mt-5">
        <h3 className="font-semibold text-lg">{food.name}</h3>
        <p className="text-gray-500 font-medium">Price: ${food.price}</p>
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
                    <ShoppingBasket /> Add To Cart
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
  );
};
