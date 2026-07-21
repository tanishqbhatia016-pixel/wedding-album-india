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
    cover: "/images/products/mini-book/cover.jpg",
    images: [
      "/images/products/mini-book/img1.jpg",
      "/images/products/mini-book/img2.jpg",
      "/images/products/mini-book/img3.jpg",
      "/images/products/mini-book/img4.jpg",
    ],
    description:
      "Premium Mini Book specially designed for birthdays, baby shoots, family memories and gifting. Sizes available 6X8",
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
    cover: "/images/products/semi-mini-book/cover.jpg",
    images: [
      "/images/products/semi-mini-book/img1.jpg",
      "/images/products/semi-mini-book/img2.jpg",
      "/images/products/semi-mini-book/img3.jpg",
      "/images/products/semi-mini-book/img4.jpg",
    ],
    description:
      "Printed on premium 300 GSM Art Paper with rich gloss finish for vibrant colours and premium feel. Sizes available 8X10",
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
    cover: "/images/products/matt-cover/cover.jpg",
    images: [
      "/images/products/matt-cover/img1.jpg",
      "/images/products/matt-cover/img2.jpg",
      "/images/products/matt-cover/img3.jpg",
      "/images/products/matt-cover/img4.jpg",
    ],
    description:
      "Elegant matt finish wedding album with premium look and smooth texture.Sizes available 12X36 18X24",
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
    cover: "/images/products/3d-cover/cover.jpg",
    images: [
      "/images/products/3d-cover/img1.jpg",
      "/images/products/3d-cover/img2.jpg",
      "/images/products/3d-cover/img3.jpg",
      "/images/products/3d-cover/img4.jpg",
    ],
    description:
      "Premium embossed 3D cover with elegant texture and luxury appearance.Sizes available 12X36 18X24",
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
    cover: "/images/products/sparkle-cover/cover.jpg",
    images: [
      "/images/products/sparkle-cover/img1.jpg",
      "/images/products/sparkle-cover/img2.jpg",
      "/images/products/sparkle-cover/img3.jpg",
      "/images/products/sparkle-cover/img4.jpg",
    ],
    description:
      "Sparkling luxury cover specially crafted for premium wedding memories.Sizes available 12X36 18X24",
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
    cover: "/images/products/acrylic-cover/cover.jpg",
    images: [
      "/images/products/acrylic-cover/img1.jpg",
      "/images/products/acrylic-cover/img2.jpg",
      "/images/products/acrylic-cover/img3.jpg",
      "/images/products/acrylic-cover/img4.jpg",
    ],
    description:
      "Premium acrylic sheet cover with crystal clear glossy finish and luxurious appearance.Sizes available 12X36 18X24 ",
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
    cover: "/images/products/wooden-cover/cover.jpg",
    images: [
      "/images/products/wooden-cover/img1.jpg",
      "/images/products/wooden-cover/img2.jpg",
      "/images/products/wooden-cover/img3.jpg",
      "/images/products/wooden-cover/img4.jpg",
    ],
    description:
      "Luxury handcrafted wooden cover album specially made for premium wedding collections.Sizes available 12X36 18X24",
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