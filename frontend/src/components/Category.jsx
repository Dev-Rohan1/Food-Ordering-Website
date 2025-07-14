import { assets } from "../assets/assets";

const categories = [
  {
    id: 1,
    img: assets.category_01,
    title: "Fresh & Healthy",
    description:
      "Enjoy fresh, healthy meals made with the finest natural ingredients.",
  },
  {
    id: 2,
    img: assets.category_02,
    title: "Fast Delivery",
    description:
      "Swift and safe delivery of your meals right to your doorstep every time.",
  },
  {
    id: 3,
    img: assets.category_03,
    title: "Delicious Taste",
    description:
      "Savor mouth-watering flavors carefully crafted by our expert chefs.",
  },
  {
    id: 4,
    img: assets.category_04,
    title: "Affordable Prices",
    description:
      "High-quality meals offered at prices that fit your budget perfectly.",
  },
];

const Category = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map(({ id, img, title, description }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center border border-gray-100 p-6 rounded-xl bg-white shadow hover:shadow-lg transition-shadow"
          >
            <img className="w-20 mb-4" src={img} alt={title} />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className="text-orange-600 font-medium cursor-pointer hover:underline">
              Learn More
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
