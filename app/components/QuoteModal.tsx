"use client";

import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function QuoteModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    album: "",
    quantity: "",
    message: "",
  });

  if (!isOpen) return null;

  const submit = () => {
    const text = `
New Quote Request

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Album: ${form.album}
Quantity: ${form.quantity}

Message:
${form.message}
`;

    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-full max-w-xl rounded-3xl bg-[#111] border border-yellow-500/20 p-8">

        <h2 className="text-3xl text-yellow-400 font-bold mb-6">
          Request a Quote
        </h2>

        <div className="space-y-4">

          <input
            placeholder="Full Name"
            className="w-full rounded-xl bg-black p-4 text-white border border-gray-700"
            onChange={(e)=>setForm({...form,name:e.target.value})}
          />

          <input
            placeholder="Phone Number"
            className="w-full rounded-xl bg-black p-4 text-white border border-gray-700"
            onChange={(e)=>setForm({...form,phone:e.target.value})}
          />

          <input
            placeholder="Email"
            className="w-full rounded-xl bg-black p-4 text-white border border-gray-700"
            onChange={(e)=>setForm({...form,email:e.target.value})}
          />

          <select
            className="w-full rounded-xl bg-black p-4 text-white border border-gray-700"
            onChange={(e)=>setForm({...form,album:e.target.value})}
          >
            <option>Select Album</option>
            <option>Premium Album</option>
            <option>Luxury Album</option>
            <option>Photo Book</option>
          </select>

          <input
            placeholder="Quantity"
            className="w-full rounded-xl bg-black p-4 text-white border border-gray-700"
            onChange={(e)=>setForm({...form,quantity:e.target.value})}
          />

          <textarea
            rows={4}
            placeholder="Message"
            className="w-full rounded-xl bg-black p-4 text-white border border-gray-700"
            onChange={(e)=>setForm({...form,message:e.target.value})}
          />

        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={submit}
            className="flex-1 rounded-full bg-yellow-500 py-4 font-bold text-black hover:bg-yellow-400"
          >
            Send Inquiry
          </button>

          <button
            onClick={onClose}
            className="rounded-full border border-gray-600 px-8 text-white"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}