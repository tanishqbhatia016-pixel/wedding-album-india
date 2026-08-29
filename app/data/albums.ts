export interface Album {
  id: number;
  slug: string;
  title: string;
  category: string;
  cover: string;
  images: string[];
  description: string;
  features: string[];
  sizes: string[];
}

export const albums: Album[] = [
  {
    id: 1,
    slug: "mini-book",
    title: "Mini Book",
    category: "Premium Photo Album",
    cover: "/images/mini-album.jpg/cover1.jpg",
    images: [
      "/images/mini-album.jpg/cover1.jpg",
      "/images/mini-album.jpg/cover2.jpg",
    ],
    description:
      "Premium Mini Book specially designed for birthdays, baby shoots, family memories and gifting. Sizes available 6×8.",
    features: [
      "Photo Quality 200 GSM Paper",
      "24 to 120 Pages",
      "Premium HD Printing",
      "Full Cover Printing",
      "Excellent Binding",
      "Long Lasting Quality",
    ],
    sizes: ["6×8"],
  },

  {
    id: 2,
    slug: "semi-mini-book",
    title: "Semi Mini Book",
    category: "Luxury Mini Album",
    cover: "/images/semini-album.jpg/cover1.jpg",
    images: [
      "/images/semini-album.jpg/cover1.jpg",
    ],
    description:
      "Printed on premium 300 GSM Art Paper with rich gloss finish for vibrant colours and a premium feel. Sizes available 8×10.",
    features: [
      "300 GSM Art Paper",
      "Rich Gloss Finish",
      "Premium Binding",
      "HD Photo Printing",
      "Long Lasting",
      "Perfect Gift Album",
    ],
    sizes: ["8×10"],
  },

  {
    id: 3,
    slug: "matt-cover",
    title: "Matt Cover Album",
    category: "Wedding Album",
    cover: "/images/matt-cover.jpg/cover1.jpg",
    images: [
      "/images/matt-cover.jpg/cover1.jpg",
    ],
    description:
      "Elegant matt finish wedding album with premium look and smooth texture. Sizes available 12×36 and 18×24.",
    features: [
      "Matt Finish Cover",
      "Premium Lamination",
      "Scratch Resistant",
      "Luxury Printing",
      "Hard Binding",
      "Premium Finish",
    ],
    sizes: ["12×36", "18×24"],
  },

  {
    id: 4,
    slug: "3d-cover",
    title: "3D Cover Album",
    category: "Luxury Album",
    cover: "/images/3d-cover.jpg/cover1.jpg",
    images: [
      "/images/3d-cover.jpg/cover1.jpg",
    ],
    description:
      "Premium embossed 3D cover with elegant texture and luxury appearance. Sizes available 12×36 and 18×24.",
    features: [
      "3D Embossed Cover",
      "Premium HD Printing",
      "Luxury Finish",
      "Water Resistant",
      "Hard Binding",
      "Scratch Resistant",
    ],
    sizes: ["12×36", "18×24"],
  },

  {
    id: 5,
    slug: "sparkle-cover",
    title: "Sparkle Cover Album",
    category: "Premium Wedding Album",
    cover: "/images/sparkel-cover.jpg/cover1.jpg",
    images: [
      "/images/sparkel-cover.jpg/cover1.jpg",
    ],
    description:
      "Sparkling luxury cover specially crafted for premium wedding memories. Sizes available 12×36 and 18×24.",
    features: [
      "Sparkle Finish",
      "Premium HD Printing",
      "Luxury Texture",
      "Elegant Design",
      "Hard Cover",
      "Premium Quality",
    ],
    sizes: ["12×36", "18×24"],
  },

  {
    id: 6,
    slug: "acrylic-cover",
    title: "Acrylic Cover Album",
    category: "Luxury Acrylic Album",
    cover: "/images/Acrylic-cover.jpg/cover1.jpg",
    images: [
      "/images/Acrylic-cover.jpg/cover1.jpg",
    ],
    description:
      "Premium acrylic sheet cover with crystal clear glossy finish and luxurious appearance. Sizes available 12×36 and 18×24.",
    features: [
      "Imported Acrylic",
      "Crystal Gloss",
      "Water Resistant",
      "Luxury Finish",
      "Premium HD Printing",
      "Hard Binding",
    ],
    sizes: ["12×36", "18×24"],
  },

  {
    id: 7,
    slug: "wooden-cover",
    title: "Wooden Cover Album",
    category: "Exclusive Wooden Album",
    cover: "/images/wooden-cover.jpg/cover1.jpg",
    images: [
      "/images/wooden-cover.jpg/cover1.jpg",
      "/images/wooden-cover.jpg/cover2.jpg",
      "/images/wooden-cover.jpg/cover3.jpg",
    ],
    description:
      "Luxury handcrafted wooden cover album specially made for premium wedding collections. Sizes available 12×36 and 18×24.",
    features: [
      "Wooden Finish",
      "Premium Engraving",
      "Luxury Appearance",
      "Hard Cover",
      "Long Lasting",
      "Exclusive Design",
    ],
    sizes: ["12×36", "18×24"],
  },
];