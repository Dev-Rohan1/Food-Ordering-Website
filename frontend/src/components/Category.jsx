import { categories } from "../assets/assets";

const Category = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map(({ id, img, title, description }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center border border-gray-100 p-6 rounded-xl bg-white shadow"
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
