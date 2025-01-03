import {
  shreeImg1,
  shreeRamlogo,
  shreeImg2,
  sanitaryWare,
  sanitaryWare2,
  raghavLogo,
  mtLogo,
  kitchenSink,
  kitchenSink2,
  bathWare,
  bathWare2,
  BluettaLogo,
  adhesive,
  adhesive1,
} from './image';

export const Tiles = [
  {
    id: '01',
    logo: shreeRamlogo,
    name: 'SHREE RAM CERAMIC',
    otherName: 'SHREE RAM CERAMIC',
    location: 'Morbi, Gujarat',
    salesType: 'Wholesaler',
    image: shreeImg1,
    image1: shreeImg2,
    type: 'Double Charged Vitrified Tiles',
    size: '600 x 600 mm ( 24 x 24 inch )',
    value: 'Standard | Glossy',
    repeat: 'Regular',
    time: 'Today, 10:23 AM',
    ruppe: '₹ 20.50',
    tax: 'Per Sq. Ft. (Tax Paid Rate)',
  },
];

export const Sanitary = [
  {
    id: '02',
    logo: raghavLogo,
    name: 'SHITAL THAKKAR',
    otherName: 'Raghav Ceramic',
    location: 'Gandhinagar, Gujarat',
    salesType: 'Wholesaler',
    image: sanitaryWare,
    image1: sanitaryWare2,
    type: 'Wash Basin',
    value: 'Premium',
    repeat: 'Regular',
    time: 'Post Expired',
    ruppe: '₹ 125',
    tax: 'Per (Basic Rate)',
  },
];

export const KitchenSink = [
  {
    id: '03',
    logo: mtLogo,
    name: 'Mahakali Tiles',
    otherName: 'Mahakali Tiles',
    location: 'Vadodara, Gujarat',
    salesType: 'Wholesaler',
    image: kitchenSink,
    image1: kitchenSink2,
    type: 'Stainless Steel Kitchen Sink',
    repeat: 'Regular',
    time: 'Post Expired',
    ruppe: '₹ 7000',
    tax: 'Per Piece (Basic Rate)',
  },
];


export const Bathware = [
    {
      id: '03',
      logo: mtLogo,
      name: 'Mahakali Tiles',
      otherName: 'Mahakali Tiles',
      location: 'Vadodara, Gujarat',
      salesType: 'Wholesaler',
      image: bathWare,
      image1: bathWare2,
      type: 'Showers',
      repeat: 'Regular',
      time: 'Post Expired',
      ruppe: '₹ 9000',
      tax: 'Per Set (Basic Rate)',
    },
  ];


export const Adhesive = [
    {
        id: '04',
        logo: BluettaLogo,
        name: 'Bluetta Ceramic',
        otherName: 'Bluetta Ceramic',
        location: 'Morbi, Gujarat',
        salesType: 'Wholesaler',
        image: adhesive,
        image1: adhesive1,
        type: 'Adhesive',
        time: 'Post Expired',
        ruppe: '₹ 160',
        tax: 'Per KG (Tax Paid Rate)',
    },
];