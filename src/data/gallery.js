const base = process.env.PUBLIC_URL || "";

export const PRODUCTS = [
  {
    id: 1,
    file: "1.jpeg",
    code: "101",
    title: "Heavy Bridal Aari Work Blouse Design",
    alt: "Heavy bridal Aari work hand embroidery on a blouse front, design code 101",
  },
  {
    id: 2,
    file: "2.jpeg",
    code: "102",
    title: "Medium Aari Work Blouse Design",
    alt: "Medium Aari work hand embroidered blouse with bead work, design code 102",
  },
  {
    id: 3,
    file: "3.jpeg",
    code: "103",
    title: "Simple Aari Work Blouse Design",
    alt: "Simple Aari work blouse design stitched by hand on a frame, design code 103",
  },
  {
    id: 4,
    file: "4.jpeg",
    code: "104",
    title: "Maggam Work Stone Work Blouse",
    alt: "Kerala maggam and stone work blouse embroidery, design code 104",
  },
  {
    id: 5,
    file: "5.jpeg",
    code: "105",
    title: "Hand Work Blouse Design With Borders",
    alt: "Custom hand work blouse design with an embroidered border, design code 105",
  },
  {
    id: 6,
    file: "6.jpeg",
    code: "106",
    title: "Bead Work Hand Embroidery Blouse",
    alt: "Hand embroidery bead work blouse with mirror and sequin work, code 106",
  },
  {
    id: 7,
    file: "7.jpeg",
    code: "107",
    title: "Bridal Hand Work Blouse Design",
    alt: "Bridal hand work blouse design with zari and sequin embroidery, code 107",
  },
  {
    id: 8,
    file: "8.jpeg",
    code: "108",
    title: "Thread Work Embroidery Blouse Design",
    alt: "Hand thread work embroidery blouse design in chikankari style, code 108",
  },
];

export const productImage = (product) => `${base}/images/products/${product.file}`;

export const productCode = (product) => `10${product.id}`;

export default PRODUCTS;
