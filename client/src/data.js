import zipbag from "./assets/img/zipbag1.png";
import fishbag from "./assets/img/fishbag.jpg";
import Garbagebag from "./assets/img/Garbagebag.png";
import HDbag from "./assets/img/HDbag.png";
import Icebag from "./assets/img/Icebag.png";
import LLbag from "./assets/img/LLbag.png";
import PPbag from "./assets/img/PPbag.jpg";
import Tshirtbag from "./assets/img/Tshirtbag.png";
export const storeProducts = [
  {
    id: 1,
    title: "Zip Bag",
    img: zipbag,
    info:
      "Zipper bags are used from food to gifts, these bags are the best way to hold products in place, keep air out, and seal out the elements.",
    inCart: true,
    count: 0,
    total: 0,
    size: ["4x6cm", "6x8cm", "9x13 cm", "15x23 cm", "23x35 cm"],
    detailProduct: {
      title: "Zip Bag",
      img: zipbag,
      size: [
        { size: "4x6 cm", price: 140 },
        { size: "6x8 cm", price: 160 },
        { size: "9x13 cm", price: 180 },
        { size: "15x23 cm", price: 200 },
        { size: "23x35 cm", price: 200 }
      ],

      info:
        "Zipper bags are used from food to gifts, these bags are the best way to hold products in place, keep air out, and seal out the elements.",
      inCart: false,
      count: 0,
      total: 0
    }
  },
  {
    id: 2,
    title: "T-shirt Bag",
    img: Tshirtbag,
    info:
      "It is made of high density plastic bag. HD bag can be used in hot or cold food, and can support a lot of weight.",
    inCart: false,
    count: 0,
    total: 0,
    size: ["5x12inch", "6x14inch", "9x18inch", "12x20inch"],
    detailProduct: {
      title: "Hiden T-shirt Bag",
      img: "img/product-1.png",
      size: [
        { size: "5x12 inch", price: 135 },
        { size: "6x14 inch", price: 135 },
        { size: "9x18 inch", price: 135 },
        { size: "12x20 inch", price: 135 }
      ],
      info:
        "It is made of high density plastic bag. HD bag can be used in hot or cold food, and can support a lot of weight.",
      inCart: false,
      count: 0,
      total: 0
    }
  },
  {
    id: 3,
    title: "PP Bag",
    img: PPbag,

    info:
      "PP bag properties is transparency, sticky and hard. It can resist to hot food and suitable for packing and presenting the product detail such as food or cookies.",
    inCart: false,
    count: 0,
    total: 0,
    size: ["3X5inch", "6X9inch", "7X11inch", "10X15inch"],
    detailProduct: {
      title: "PP bag (ถุงร้อน)",
      img: "img/product-1.png",
      size: [
        { size: "3X5 inch", price: 80 },
        { size: "6X9 inch", price: 80 },
        { size: "7X11 inch", price: 80 },
        { size: "10X15 inch", price: 80 }
      ],
      info:
        "PP bag properties is transparency, sticky and hard. It can resist to hot food and suitable for packing and presenting the product detail such as food or cookies.",
      caution:
        "Caution : Not suitable for cold food or water and cannot store in refridgerator.",
      inCart: false,
      count: 0,
      total: 0
    }
  },
  {
    id: 4,
    title: "LL Bag",
    img: LLbag,
    info:
      "LL bag properties are transparency and more flexible than PP bag. It's suitable for cold food or drink and can store in the refridgerator without break.",
    inCart: false,
    count: 0,
    total: 0,
    size: ["3X5inch", "6X9inch", "7X11inch", "10X15inch"],
    detailProduct: {
      title: "LL Bag (ถุงเย็น)",
      img: "img/product-1.png",
      size: [
        { size: "3X5 inch", price: 80 },
        { size: "6X9 inch", price: 80 },
        { size: "7X11 inch", price: 80 },
        { size: "10X15 inch", price: 80 }
      ],
      info:
        "LL bag properties are transparency and more flexible than PP bag. It's suitable for cold food or drink and can store in the refridgerator without break.",
      caution: "Caution : Not suitable for hot food or water.",
      inCart: false,
      count: 0,
      total: 0
    }
  },
  {
    id: 5,
    title: "Ice Bag",
    img: Icebag,
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    size: ["21x31cm"],
    detailProduct: {
      title: "Ice Bag",
      img: "img/Icebag.png",
      size: [{ size: "21x31 cm", price: 120 }],
      info:
        "Ice plastic bag is used for ice cube packaging or for vacuum, frozen, liquid products.",
      caution: "Caution: Ice plastic bag can support not more than 4 kg",
      inCart: false,
      count: 0,
      total: 0
    }
  },
  {
    id: 6,
    title: "Hiden Bag",
    img: HDbag,

    info:
      "It is made of high density plastic bag. HD bag can be used in covering big thing or a huge amount of vegetables, and can support a lot of weight too.",
    inCart: false,
    count: 0,
    total: 0,
    size: ["14x22inch", "16x26inch", "18x28inch", "20x30inch"],
    detailProduct: {
      title: "Hiden Bag",
      img: "img/HDbag.png",
      size: [
        { size: "14x22 inch", price: 90 },
        { size: "16x26 inch", price: 90 },
        { size: "18x28 inch", price: 90 },
        { size: "20x30 inch", price: 90 }
      ],
      info:
        "It is made of high density plastic bag. HD bag can be used in covering big thing or a huge amount of vegetables, and can support a lot of weight too.",
      inCart: false,
      count: 0,
      total: 0
    }
  },
  {
    id: 7,
    title: "Garbage Bag",
    img: Garbagebag,
    info:
      "It is made of high density plastic bag. HD bag can be used in covering big thing or a huge amount of vegetables, and can support a lot of weight too.",
    inCart: false,
    count: 0,
    total: 0,
    size: ["10x20inch", "18x34inch", "26x34inch", "28x45inch"],
    detailProduct: {
      title: "Garbage Bag",
      img: "img/Garbagebag.png",
      size: [
        { size: "10x20 inch", price: 185 },
        { size: "18x34 inch", price: 185 },
        { size: "26x34 inch", price: 185 },
        { size: "28x45 inch", price: 185 }
      ],
      info:
        "It is made of high density plastic bag. HD bag can be used in covering big thing or a huge amount of vegetables, and can support a lot of weight too.",
      inCart: false,
      count: 0,
      total: 0
    }
  },
  {
    id: 8,
    title: "Farm Bag",
    img: fishbag,
    info:
      "Used for packing water with nursery fish or shrimp in farm industry. The bag provide inner and outer bag for good protecting.",
    inCart: false,
    count: 0,
    total: 0,
    size: ["18x28inch", "36x54inch"],
    detailProduct: {
      title: "Farm Bag",
      img: "img/fishbag.jpg",
      size: [
        { size: "18x28 inch", price: 125 },
        { size: "36x54 inch", price: 125 }
      ],
      info:
        "Used for packing water with nursery fish or shrimp in farm industry. The bag provide inner and outer bag for good protecting.",
      inCart: false,
      count: 0,
      total: 0
    }
  }
];

// export const detailProduct = {
//   id: 1,
//   title: "Google Pixel - Black",
//   img: "img/product-1.png",
//   price: 10,
//   info:
//     "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//   inCart: false,
//   count: 0,
//   total: 0
// };
