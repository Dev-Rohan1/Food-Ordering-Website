import { assets } from "../assets/assets";

const features = [
  {
    id: 1,
    img: assets.bike,
    title: "Convenient and Reliable",
    description:
      "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
  },
  {
    id: 2,
    img: assets.Variety,
    title: "Quality Ingredients",
    description:
      "We use only fresh and high-quality ingredients to prepare every meal, ensuring the best taste and nutrition.",
  },
  {
    id: 3,
    img: assets.burger,
    title: "Excellent Customer Support",
    description:
      "Our friendly support team is always ready to assist you with your orders and any inquiries you might have.",
  },
];

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img
            src={assets.about}
            alt="About us"
            className="rounded-xl w-full"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Why People Choose Us?
          </h2>

          {/* Features List */}
          <div className="space-y-6">
            {features.map(({ id, img, title, description }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row md:items-center gap-6 border border-gray-200 rounded-xl bg-white shadow p-4"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600 mt-1">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
