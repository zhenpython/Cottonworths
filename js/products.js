export const productCategoryList = [
  {
    id: 1,
    category: "Frozen Food",
    subcategories: [
      {
        id: "FV",
        name: "Frozen Vegetables",
      },
      {
        id: "FM",
        name: "Frozen Meats",
      },
    ],
  },
  {
    id: 2,
    category: "Beverages",
    subcategories: [
      {
        id: "BCS",
        name: "Cold Beverages",
      },
      {
        id: "BWS",
        name: "Wine and Spirit",
      },
    ],
  },
  {
    id: 3,
    category: "Fresh Food",
    subcategories: [
      {
        id: "FTA",
        name: "Fresh Take Away",
      },
      {
        id: "FFM",
        name: "Fresh Fried Meat",
      },
    ],
  },
  {
    id: 4,
    category: "Fresh Pastry",
    subcategories: [
      {
        id: "FFP",
        name: "Fresh French Pastry",
      },
      {
        id: "FS",
        name: "Fresh Sourdough",
      },
    ],
  },
  {
    id: 5,
    category: "Snacks",
    subcategories: [
      {
        id: "SSW",
        name: "Snacks Sweet",
      },
      {
        id: "SSO",
        name: "Snacks Savoury",
      },
    ],
  },
];

export const productList = [
  {
    id: "FV001",
    name: "Green Giant Cut Green Beans",
    price: 2.99,
    quantity: 50,
    subcategoryId: 'FV',
    imageLink:
      "https://greengiantcanada.ca/wp-content/uploads/cut-green-beans.png",
  },
  {
    id: "FV002",
    name: "Birds Eye Broccoli Florets",
    price: 3.49,
    quantity: 30,
    subcategoryId: 'FV',
    imageLink:
      "https://www.birdseye.com/sites/g/files/qyyrlu756/files/images/products/broccoli-florets-12733.png",
  },
  {
    id: "FV003",
    name: "C&W Petite Whole Green Beans",
    price: 2.79,
    quantity: 25,
    subcategoryId: 'FV',
    imageLink:
      "https://i5.walmartimages.com/asr/64667ead-9b79-4936-be58-fae928533ac8.f0f7e58a7fedb01eb79cb10083c4ab4c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: "FV004",
    name: "Pictsweet Farms Chopped Spinach",
    price: 2.99,
    quantity: 40,
    subcategoryId: 'FV',
    imageLink:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00070560872768/67ab27eabe595f04cfc20e1257a67b6a_large.png&width=512&type=webp&quality=90",
  },
  {
    id: "FV005",
    name: "Trader Joe's Frozen Cauliflower Rice",
    price: 2.49,
    quantity: 20,
    subcategoryId: 'FV',
    imageLink:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/28/320x320/square-1500220237-5592257612-riced-veggies.jpg?resize=1200:*",
  },

  {
    id: "FM001",
    name: "Tyson Fully Cooked Crispy Chicken Strips",
    price: 6.99,
    subcategoryId: 'FM',
    quantity: 20,
    imageLink:
      "https://target.scene7.com/is/image/Target/GUEST_4a426538-945c-4bf5-9c8a-6575b50343a6",
  },
  {
    id: "FM002",
    name: "Hormel Black Label Fully Cooked Bacon",
    price: 4.49,
    subcategoryId: 'FM',
    quantity: 30,
    imageLink: "https://bjs.scene7.com/is/image/bjs/267580?$bjs-Zoom$",
  },
  {
    id: "FM003",
    name: "Johnsonville Flame Grilled Fully Cooked Original Brats",
    price: 5.99,
    subcategoryId: 'FM',
    quantity: 25,
    imageLink:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00077782003734/97275b6c68b0a80f7f5510dccec562e8_large.png&width=512&type=webp&quality=90",
  },
  {
    id: "FM004",
    name: "Beyond Meat Beyond Beef Plant-Based Ground",
    price: 7.99,
    subcategoryId: 'FM',
    quantity: 15,
    imageLink:
      "https://beyond-meat-cms-production.s3.us-west-2.amazonaws.com/d643b99c-1861-40e6-af05-6843fb1f9e78.png",
  },
  {
    id: "FM005",
    name: "Perdue Farms Fully Cooked Chicken Breast Strips",
    price: 8.49,
    subcategoryId: 'FM',
    quantity: 0,
    imageLink: "https://www.perdue.com/product-images/81221_640_81221_FV.jpg",
  },
  {
    id: "BCS001",
    name: "Coca-Cola Soda Pop, 2 Liter Bottle",
    price: 2.68,
    subcategoryId: "BCS",
    quantity: 10,
    imageLink:
      "https://i5.walmartimages.com/asr/b8110bf1-ef34-47d4-87f5-fef2638cb307.0f38e31d646d9f62e02a649ed6ae4e57.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: "BCS002",
    name: "Health-Ade Probiotic Kombucha Tea",
    price: 3.28,
    subcategoryId: "BCS",
    quantity: 25,
    imageLink:
      "https://i5.walmartimages.com/asr/a6a98c6f-e5c2-428d-bf39-51c3708f4667.d637fbbe8df3afafbb30f008b51e884c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: "BCS003",
    name: "Prime Hydration Blue Raspberry",
    price: 1.88,
    subcategoryId: "BCS",
    quantity: 10,
    imageLink:
      "https://i5.walmartimages.com/asr/78163252-8925-4c52-af07-7f69725ad54d.e15bf742c0a3ffaf1ef06042448ce137.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: "BCS004",
    name: "Starbucks Iced Coffee, Unsweetened Medium Roast",
    price: 6.08,
    subcategoryId: "BCS",
    quantity: 10,
    imageLink:
      "https://i5.walmartimages.com/asr/dbc7ccef-76bd-4112-a55c-1ac1904d7799.61c739042cc688beb195380168947c36.jpeg",
  },
  {
    id: "BWS001",
    name: "Josh Cellars Cabernet Sauvignon Wine",
    price: 14.98,
    subcategoryId: "BWS",
    quantity: 20,
    imageLink:
      "https://i5.walmartimages.com/asr/e02747f2-9ef0-4a77-83a9-7bf27b2ffde5.9284896ff89ba42ea326f310991f0eea.jpeg",
  },
  {
    id: "BWS002",
    name: "Barefoot Fruitscato Peach Rose Wine",
    price: 16.98,
    subcategoryId: "BWS",
    quantity: 15,
    imageLink:
      "https://i5.walmartimages.com/asr/1024bd73-fbe1-4290-90a4-9ced343716c7.2b06751d171466c2899636bc3abe56bd.jpeg",
  },
  {
    id: "BWS003",
    name: "Caliber Vodka, 1.75 L",
    price: 12.98,
    subcategoryId: "BWS",
    quantity: 5,
    imageLink:
      "https://i5.walmartimages.com/asr/d7368138-5711-4a1d-aba5-45fcc942f18b_1.d17862026f3f97cb23f2e83b6d06c66c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: "BWS004",
    name: "Caliber Citrus Vodka, 1.75 L",
    price: 15.98,
    subcategoryId: "BWS",
    quantity: 0,
    imageLink:
      "https://i5.walmartimages.com/asr/c519d571-185a-413b-9671-033e4bbd7bfc.b952a27fbadb5800d7c95b185630a8d4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: "FTA001",
    name: "Chicken & Mushroom Risotto",
    price: 11.50,
    subcategoryId: "FTA",
    quantity: 28,
    imageLink:
      "https://www.dineamic.com.au/cdn/shop/products/chicken-mushroom-Risotto-LowCal_530x@2x.jpg?v=1671584964",
  },
  {
    id: "FTA002",
    name: "Smokey Chicken with Roasted Chat Potatoes",
    price: 12.00,
    subcategoryId: "FTA",
    quantity: 10,
    imageLink:
      "https://www.dineamic.com.au/cdn/shop/products/SmokeyChicken-LowCal_530x@2x.jpg?v=1671585368",
  },
  {
    id: "FTA003",
    name: "Glazed Chicken and Pork Meatballs",
    price: 11.50,
    subcategoryId: "FTA",
    quantity: 15,
    imageLink:
      "https://www.dineamic.com.au/cdn/shop/products/Glazed-Meatballs_530x@2x.jpg?v=1659998336",
  },
  {
    id: "FTA004",
    name: "Beef Chilli Con Carne with Mexican Rice",
    price: 11.50,
    subcategoryId: "FTA",
    quantity: 0,
    imageLink:
      "https://www.dineamic.com.au/cdn/shop/products/Beef-Chilli-Conrne_530x@2x.jpg?v=1659995598",
  },
  {
    id: "FFP001",
    name: "Toscano French Croissants, 240g",
    price: 5.30,
    subcategoryId: "FFP",
    quantity: 15,
    imageLink:
      "https://cdn0.woolworths.media/content/wowproductimages/large/684682.jpg",
  },
  {
    id: "FFP002",
    name: "Toscano French Style Madeleines Original",
    price: 5.30,
    subcategoryId: "FFP",
    quantity: 15,
    imageLink:
      "https://cdn0.woolworths.media/content/wowproductimages/large/243942.jpg",
  },
  {
    id: "FFP003",
    name: "Pampas Puff Pastry 6 Sheets",
    price: 5.20,
    subcategoryId: "FFP",
    quantity: 10,
    imageLink:
      "https://cdn0.woolworths.media/content/wowproductimages/large/096492.jpg",
  },
  {
    id: "FFP004",
    name: "Quaranta Soft Nougat Cakes French Caramel",
    price: 12.00,
    subcategoryId: "FFP",
    quantity: 15,
    imageLink:
      "https://productimages.coles.com.au/productimages/3/3899500.jpg",
  },
  {
    id: "FS001",
    name: "CottonWorths Rustic White Sourdough Loaf",
    price: 6.00,
    subcategoryId: "FS",
    quantity: 10,
    imageLink:
      "https://cdn0.woolworths.media/content/wowproductimages/large/852257.jpg",
  },
  {
    id: "FS002",
    name: "Great Value Sourdough Bread",
    price: 4.76,
    subcategoryId: "FS",
    quantity: 20,
    imageLink:
      "https://i5.walmartimages.com/asr/fd804f80-f09b-44c5-b02c-c7ab592b12f3.32fa78c99c51e374a327a1743e83d4f9.jpeg",
  },
  {
    id: "FS003",
    name: "The Rustik Oven Sourdough Bread",
    price: 6.50,
    subcategoryId: "FS",
    quantity: 0,
    imageLink:
      "https://i5.walmartimages.com/asr/347f8b53-f6e4-46fe-b39a-5784eb42c9a2.b0cb08c0b01a626a9e007d2877852a4b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: "SSW001",
    name: "Nestle Milo Dipped Snack Bars With White Chocolate",
    price: 6.00,
    subcategoryId: "SSW",
    quantity: 40,
    imageLink:
      "https://cdn0.woolworths.media/content/wowproductimages/large/797102.jpg",
  },
  {
    id: "SSW002",
    name: "Oreo Mini Original Cookies Multipack",
    price: 3.50,
    subcategoryId: "SSW",
    quantity: 25,
    imageLink:
      "https://cdn0.woolworths.media/content/wowproductimages/large/788789.jpg",
  },
  {
    id: "SSW003",
    name: "Arnotts Tim Tam Chocolate Biscuits",
    price: 4.50,
    subcategoryId: "SSW",
    quantity: 30,
    imageLink:
      "https://i5.walmartimages.com/asr/004125a6-6587-4e43-a2f6-5ae826e55fd5_1.2d1d24423c9ac1ca01b02d9126306834.jpeg",
  },
  {
    id: "SSW004",
    name: "CHIPS AHOY! Original Chocolate Chip Cookies",
    price: 4.58,
    subcategoryId: "SSW",
    quantity: 20,
    imageLink:
      "https://i5.walmartimages.com/asr/d72801db-ae4f-4a74-85d5-56682b302826.2b3d6f534ee334a36cf27766e57908e2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: "SSO001",
    name: "Pringles Original Potato Crisps",
    price: 4.28,
    subcategoryId: "SSO",
    quantity: 35,
    imageLink:
      "https://i5.walmartimages.com/asr/abb6608e-2eae-45c2-9ee9-bbadd4cf927f.e9b7ac2f074a4c2d4acd4bdecdc7f9b5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    id: "SSO002",
    name: "Thins Chips Chicken",
    price: 4.70,
    subcategoryId: "SSO",
    quantity: 34,
    imageLink:
      "https://cdn0.woolworths.media/content/wowproductimages/large/319967.jpg",
  },
  {
    id: "SSO003",
    name: "Smith's Crinkle Cut Potato Chips Cheese & Onion",
    price: 3.19,
    subcategoryId: "SSO",
    quantity: 35,
    imageLink:
      "https://cdn0.woolworths.media/content/wowproductimages/large/826735.jpg",
  },
  {
    id: "SSO004",
    name: "Doritos Nacho Cheese Flavored Tortilla Chips",
    price: 5.38,
    subcategoryId: "SSO",
    quantity: 35,
    imageLink:
      "https://i5.walmartimages.com/asr/18e7263a-b083-48f0-9264-a743f1a5fa68.9ffc55046b3cb571d9442c51479bb58c.jpeg",
  },
];
