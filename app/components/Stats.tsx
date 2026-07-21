export default function Stats() {
  const stats = [
    { number: "5000+", title: "Albums Delivered" },
    { number: "300+", title: "Professional Photographers" },
    { number: "15+", title: "Years of Experience" },
    { number: "100%", title: "Customer Satisfaction" },
  ];

  return (
    <section className="bg-yellow-500 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-5xl font-bold text-black">
              {item.number}
            </h2>

            <p className="mt-3 text-lg font-semibold text-black">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}