"use client";

import {
  Award,
  ShieldCheck,
  Gem,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Luxury handcrafted wedding albums made with exceptional finishing.",
  },
  {
    icon: Gem,
    title: "Luxury Materials",
    desc: "Italian leather, acrylic, velvet and premium imported papers.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Brand",
    desc: "Serving photographers and studios with premium albums.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Safe packaging with delivery across India.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-yellow-400">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-white">

            Crafted For Lifetime Memories

          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="group rounded-3xl bg-[#111] border border-yellow-500/20 p-8 hover:border-yellow-400 transition-all duration-500 hover:-translate-y-2"
              >

                <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-6 group-hover:rotate-12 transition">

                  <Icon className="text-black" size={30} />

                </div>

                <h3 className="text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-7">

                  {item.desc}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}