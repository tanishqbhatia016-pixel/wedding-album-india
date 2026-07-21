"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-[#090909] to-black py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-yellow-400 text-sm">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            Let's Create Your Dream Album
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            We'd love to hear about your project. Send us your requirements
            and our team will get back to you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}

          <div className="rounded-3xl bg-[#111] border border-yellow-500/20 p-8">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-black border border-gray-700 p-4 text-white outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-black border border-gray-700 p-4 text-white outline-none focus:border-yellow-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl bg-black border border-gray-700 p-4 text-white outline-none focus:border-yellow-400"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your requirements..."
                className="w-full rounded-xl bg-black border border-gray-700 p-4 text-white outline-none focus:border-yellow-400"
              ></textarea>

              <button className="w-full rounded-full bg-yellow-500 py-4 font-bold text-black hover:bg-yellow-400 transition">

                Send Inquiry →

              </button>

            </form>

          </div>

          {/* Business Information */}

          <div className="space-y-6">

            <div className="flex gap-5 rounded-2xl bg-[#111] p-6 border border-yellow-500/20">
              <Phone className="text-yellow-400" size={30} />
              <div>
                <h3 className="text-xl font-bold text-white">Phone</h3>
                <p className="text-gray-400">+91 9818877994</p>
              </div>
            </div>

            <div className="flex gap-5 rounded-2xl bg-[#111] p-6 border border-yellow-500/20">
              <Mail className="text-yellow-400" size={30} />
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-gray-400">infoweddingalbumindia@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-5 rounded-2xl bg-[#111] p-6 border border-yellow-500/20">
              <MapPin className="text-yellow-400" size={30} />
              <div>
                <h3 className="text-xl font-bold text-white">Location</h3>
                <p className="text-gray-400">Delhi, India</p>
              </div>
            </div>

            <div className="flex gap-5 rounded-2xl bg-[#111] p-6 border border-yellow-500/20">
              <Clock className="text-yellow-400" size={30} />
              <div>
                <h3 className="text-xl font-bold text-white">Business Hours</h3>
                <p className="text-gray-400">Mon – Sat | 10 AM – 7 PM</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}