export interface Item {
  id: string
  name: string
  image: string
  currentPrice: number
  oldPrice: number | null
}

export const Electronics: Item[] = [
  {
    id: "0501",
    name: "Blender",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/electronic/blender.webp",
    currentPrice: 75,
    oldPrice: 85
  },
  {
    id: "0502",
    name: "Coffee-Maker",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/electronic/cofee+maker.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0503",
    name: "Iron",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/electronic/iron.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0504",
    name: "Note 10+",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/electronic/mobile.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0505",
    name: "Mac Book",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/electronic/macbook.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0506",
    name: "Microwave",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/electronic/microwave.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0507",
    name: "Refrigerators",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/electronic/refregirator.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0587",
    name: "Rice Cooker",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/electronic/ricecooker.webp",
    currentPrice: 35,
    oldPrice: 45
  },
];

export const FruitList: Item[] = [
  {
    id: "0071",
    name: "Apple",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/fruits/apple.webp",
    currentPrice: 75,
    oldPrice: 85
  },
  {
    id: "0072",
    name: "Banana",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/fruits/banana.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0073",
    name: "Orange",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/fruits/orange.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0074",
    name: "Papaya",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/fruits/papaya.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0075",
    name: "Straw Berry",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/fruits/strawberry.webp",
    currentPrice: 35,
    oldPrice: 45
  },
];

export const meatList: Item[] = [
  {
    id: "0061",
    name: "Bairaha",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/meat/bairaha.webp",
    currentPrice: 75,
    oldPrice: 85
  },
  {
    id: "0062",
    name: "Chicken",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/meat/chickendrumstick.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0063",
    name: "Wings",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/meat/chickenwings.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0064",
    name: "Hurulla",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/meat/hurulla.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0065",
    name: "Linna",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/meat/linna.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0082",
    name: "Prawns",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/meat/prawns.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0083",
    name: "Paraw",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/meat/paraw.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0084",
    name: "Tuna",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/meat/tuna.webp",
    currentPrice: 35,
    oldPrice: null
  },
];

export const pharmacyList: Item[] = [
  {
    id: "0041",
    name: "Cotton-Wood",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/phamasy/cotton.webp",
    currentPrice: 75,
    oldPrice: 85
  },
  {
    id: "0042",
    name: "K95-Mask",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/phamasy/k95.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0043",
    name: "Piriton",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/phamasy/piriton.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0044",
    name: "Plaster",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/phamasy/plaster.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0045",
    name: "Asamodagam",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/phamasy/asamodagam.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0442",
    name: "Panadol",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/phamasy/panadol.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0443",
    name: "Sidalepa",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/phamasy/sidalepa.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0444",
    name: "Sanitizer",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/phamasy/sanitizer.webp",
    currentPrice: 35,
    oldPrice: null
  },
];

export const vegetableList: Item[] = [
  {
    id: "0001",
    name: "Carrot",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/vegetable/carrot.webp",
    currentPrice: 75,
    oldPrice: 85
  },
  {
    id: "0002",
    name: "Cabbage",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/vegetable/cabbage.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0003",
    name: "Garlic",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/vegetable/garlic.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0004",
    name: "Leaks",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/vegetable/leaks.webp",
    currentPrice: 35,
    oldPrice: null
  },
  {
    id: "0005",
    name: "Onion",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/vegetable/onion.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0006",
    name: "Potato",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/vegetable/potato.webp",
    currentPrice: 35,
    oldPrice: 45
  },
  {
    id: "0007",
    name: "Egg Plant",
    image: "https://s3.amazonaws.com/bitsandbytes.images/images/products/vegetable/egg+plant.webp",
    currentPrice: 75,
    oldPrice: 85
  },
];
