"use client";

export default function Instagram() {
  return (
    <a
      href="https://instagram.com/weddingalbum2026"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-28
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-gradient-to-tr
        from-pink-500
        via-red-500
        to-yellow-500
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        transition
        duration-300
      "
    >
      <img
        src="/logo/instagram.png"
        alt="Instagram"
        className="w-9 h-9"
      />
    </a>
  );
}