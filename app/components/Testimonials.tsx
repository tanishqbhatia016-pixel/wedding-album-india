"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    review:
      "The album quality exceeded our expectations. Beautiful finish and excellent service.",
  },
  {
    name: "Priya & Aman",
    city: "Jaipur",
    review:
      "Our wedding memories were preserved perfectly. Highly recommended!",
  },
  {
    name: "Neha Verma",
    city: "Mumbai",
    review:
      "Premium quality, fast delivery and amazing customer support.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-yellow-400 uppercase tracking-[8px] mb-3">
          Testimonials
        </p>

        <h2 className="text-5xl font-bold text-white mb-16">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-md p-8 hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={22}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-7">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-yellow-400">
                {item.name}
              </h3>

              <p className="text-gray-500">
                {item.city}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}