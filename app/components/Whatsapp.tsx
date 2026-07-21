"use client";

import { MessageCircle } from "lucide-react";

export default function Whatsapp() {
  const phone = "919818877994";

  const message =
    "Hello! I visited your Wedding Album India website and would like to know more about your wedding albums.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl hover:scale-110 transition-all"
    >
      <MessageCircle size={34} className="text-white" />
    </a>
  );
}