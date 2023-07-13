require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([

    { name: 'A2Z', sortOrder: 10 },
          { name: 'AC moore', sortOrder: 20 },
          { name: 'Allen Sterling', sortOrder: 30 },
          { name: 'Allstar Health', sortOrder: 40 },
          { name: 'Broadway Gardens', sortOrder: 50 },
          { name: 'Bulk Apothecary', sortOrder: 60 },
          { name: 'Chemistrystore', sortOrder: 70 },
          { name: 'CMP', sortOrder: 80 },
          { name: 'CVS', sortOrder: 90 },
          { name: 'Dipietros', sortOrder: 100 },
          { name: 'Dishwaser-Uncle Andy', sortOrder: 110 },
          { name: 'dollar store', sortOrder: 120 },
          { name: 'Freeze Dryer', sortOrder: 130 },
          { name: 'Griffen Greenhouse', sortOrder: 140 },
          { name: 'Handsink-rest equiment store', sortOrder: 150 },
          { name: 'Heat system for grow room', sortOrder: 160 },
          { name: 'High Tech', sortOrder: 170 },
          { name: 'Home Depot', sortOrder: 180 },
          { name: 'Indendent power', sortOrder: 190 },
          { name: 'Jordan Farm', sortOrder: 200 },
          { name: 'labor cost-Rob Fogg', sortOrder: 210 },
          { name: 'Leapin Lizards', sortOrder: 220 },
          { name: 'Leroux Kitchen', sortOrder: 230 },
          { name: 'Lois', sortOrder: 240 },
          { name: 'lorann oils', sortOrder: 250 },
          { name: 'Mardens', sortOrder: 260 },
          { name: 'mountain Rose', sortOrder: 270 },
          { name: 'Multiple vendors', sortOrder: 280 },
          { name: 'Napa', sortOrder: 290 },
          { name: 'Natural Happiness', sortOrder: 300 },
          { name: 'Nolts Greenhouse', sortOrder: 310 },
          { name: 'oakhill', sortOrder: 320 },
          { name: 'Pharmaca', sortOrder: 330 },
          { name: 'Post office', sortOrder: 340 },
          { name: 'Proverda lab', sortOrder: 350 },
          { name: 'Renhui metal', sortOrder: 360 },
          { name: 'Sams Club', sortOrder: 370 },
          { name: 'shaws', sortOrder: 380 },
          { name: 'SJR Labs', sortOrder: 390 },
          { name: 'Staples', sortOrder: 400 },
          { name: 'State of Maine', sortOrder: 410 },
          { name: 'State of Mind', sortOrder: 420 },
          { name: 'true value', sortOrder: 430 },
          { name: 'Truffle made', sortOrder: 440 },
          { name: 'Uline', sortOrder: 450 },
          { name: 'Urban Garden', sortOrder: 460 },
          { name: 'Vessel Services', sortOrder: 470 },
          { name: 'walmrt', sortOrder: 480 },
          { name: 'zNatural', sortOrder: 490 },



            //   { name: 'unknown description-20012', sortOrder: 10 },
            //   { name: 'cooking-50040', sortOrder: 20 },
            //   { name: 'Electric-greenhouse-50610', sortOrder: 30 },
            //   { name: 'equipment-indirect expenses-16000', sortOrder: 40 },
            //   { name: 'extraction-50022', sortOrder: 50 },
            //   { name: 'freight out-40195', sortOrder: 60 },
            //   { name: 'growing-50010', sortOrder: 70 },
            //   { name: 'indirect equip-non cap equip-50550', sortOrder: 80 },
            //   { name: 'indirect equipment repair&maint-50040', sortOrder: 90 },
            //   { name: 'indirect equipment repair&maint-50552', sortOrder: 100 },
            //   { name: 'indirect equipment repair&maint-50590', sortOrder: 110 },
            //   { name: 'leasehold improvements-16030', sortOrder: 120 },
            //   { name: 'leasehold improvments-16030', sortOrder: 130 },
            //   { name: 'Licensing-50565', sortOrder: 140 },
            //   { name: 'Licensing-60185', sortOrder: 150 },
            //   { name: 'office supplies-60140', sortOrder: 160 },
            //   { name: 'packaging-50090', sortOrder: 170 },
            //   { name: 'purchases for resale-50100', sortOrder: 180 },
            //   { name: 'QC/Lab-50560', sortOrder: 190 },
            // 
          ]);

  await Item.deleteMany({});
  const items = await Item.create([

    {
      name: "Dishwaser-Uncle Andy",
      emoji: "equipment",
      category:categories[3],
      price: 600.00, barter: false
    }, 
    {
      name: "Freeze Dryer",
      emoji: "no description",
      category:categories[3],
      price: 3200.00, barter: false
    },
    {
      name: "Home Depot",
      emoji: "Misc grow room-paints/lights",
      category:categories[3],
      price: 667.05, barter: false
    },
    {
      name: "Renhui metal",
      emoji: "plant lamps",
      category:categories[3],
      price: 1600.00, barter: false
    },
    {
      name: "Heat system for grow room",
      emoji: "no description",
      category:categories[12],
      price: 584.40, barter: false
    },
    {
      name: "labor cost-Rob Fogg",
      emoji: "heating system/water line grow room",
      category:categories[12],
      price: 600.00, barter: false
    },
    {
      name: "Multiple vendors",
      emoji: "fix new greenhouse",
      category:categories[12],
      price: 1720.70, barter: false
    },
    {
      name: "Nolts Greenhouse",
      emoji: "greenhouse-plastic",
      category:categories[12],
      price: 1073.5, barter: false
    },
    {
      name: "State of Maine",
      emoji: "sales tax",
      category:categories[0],
      price: 473.00, barter: false
    },
    {
      name: "State of Maine",
      emoji: "sales tax",
      category:categories[0],
      price: 769.95, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 8.07, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 11.00, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 13.79, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 11.19, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 14.5, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 6.09, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 11.91, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 12.32, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 15.28, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 10.73, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 8.62, barter: false
    },
    {
      name: "Post office",
      emoji: "office shipping",
      category:categories[5],
      price: 4.65, barter: false
    },
    {
      name: "Post office",
      emoji: "freight-out",
      category:categories[5],
      price: 10.94, barter: false
    },
    {
      name: "Post office",
      emoji: "freight-out",
      category:categories[5],
      price: 25.02, barter: false
    },
    {
      name: "Post office",
      emoji: "freight-out",
      category:categories[5],
      price: 55.00, barter: false
    },
    {
      name: "Post office",
      emoji: "Shipping",
      category:categories[5],
      price: 28.80, barter: false
    },
    {
      name: "Post office",
      emoji: "Shipping",
      category:categories[5],
      price: 28.80, barter: false
    },
    {
      name: "A2Z",
      emoji: "nutrients",
      category:categories[6],
      price: 14.18, barter: false
    },
    {
      name: "Allen Sterling",
      emoji: "soil",
      category:categories[6],
      price: 11.19, barter: false
    },
    {
      name: "Allen Sterling",
      emoji: "Soil",
      category:categories[6],
      price: 179.5, barter: false
    },
    {
      name: "Broadway Gardens",
      emoji: "soil",
      category:categories[6],
      price: 67.96, barter: false
    },
    {
      name: "Broadway Gardens",
      emoji: "soil",
      category:categories[6],
      price: 39.98, barter: false
    },
    {
      name: "Griffen Greenhouse",
      emoji: "nutrients-Part A",
      category:categories[6],
      price: 57.23, barter: false
    },
    {
      name: "Griffen Greenhouse",
      emoji: "nutrients-Boost",
      category:categories[6],
      price: 35.3, barter: false
    },
    {
      name: "Griffen Greenhouse",
      emoji: "nutrients-Bloom",
      category:categories[6],
      price: 60.91, barter: false
    },
    {
      name: "Griffen Greenhouse",
      emoji: "nutrients-magnesium",
      category:categories[6],
      price: 22.7, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 441.98, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 103.99, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 37.99, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 32.99, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 4.18, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 17.25, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 65.25, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 42.95, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 30.00, barter: false
    },
    {
      name: "High Tech",
      emoji: "nutrients",
      category:categories[6],
      price: 93.80, barter: false
    },
    {
      name: "Jordan Farm",
      emoji: "soil",
      category:categories[6],
      price: 45.00, barter: false
    },
    {
      name: "Jordan Farm",
      emoji: "soil",
      category:categories[6],
      price: 38.00, barter: false
    },
    {
      name: "Jordan Farm",
      emoji: "soil",
      category:categories[6],
      price: 45.00, barter: false
    },
    {
      name: "Jordan Farm",
      emoji: "soil",
      category:categories[6],
      price: 38.00, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 61.05, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "plant",
      category:categories[6],
      price: 298.68, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 65.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 32.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "wash",
      category:categories[6],
      price: 132.92, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "clonex gel",
      category:categories[6],
      price: 39.80, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "plant",
      category:categories[6],
      price: 171.40, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 37.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 32.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 87.00, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 16.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 14.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 14.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[6],
      price: 16.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "wash",
      category:categories[6],
      price: 4.99, barter: false
    },
    {
      name: "Dipietros",
      emoji: "everclear",
      category:categories[4],
      price: 65.93, barter: false
    },
    {
      name: "Dipietros",
      emoji: "everclear",
      category:categories[4],
      price: 65.93, barter: false
    },
    {
      name: "Dipietros",
      emoji: "everclear",
      category:categories[4],
      price: 39.99, barter: false
    },
    {
      name: "Dipietros",
      emoji: "everclear",
      category:categories[4],
      price: 39.99, barter: false
    },
    {
      name: "SJR Labs",
      emoji: "SJR labs-RSO",
      category:categories[4],
      price: 1663.25, barter: false
    },
    {
      name: "SJR Labs",
      emoji: "SJR labs-RSO",
      category:categories[4],
      price: 2301.25, barter: false
    },
    {
      name: "Vessel Services",
      emoji: "dry ice",
      category:categories[4],
      price: 16.5, barter: false
    },
    {
      name: "AC moore",
      emoji: "gluclose",
      category:categories[1],
      price: 5.99, barter: false
    },
    {
      name: "Allstar Health.",
      emoji: "sleepcomplete",
      category:categories[1],
      price: 18.40, barter: false
    },
    {
      name: "Allstar Health.",
      emoji: "sleepcomplete",
      category:categories[1],
      price: 18.40, barter: false
    },
    {
      name: "Bulk Apothecary",
      emoji: "flavor",
      category:categories[1],
      price: 20.80, barter: false
    },
    {
      name: "Bulk Apothecary",
      emoji: "flavor",
      category:categories[1],
      price: 30.04, barter: false
    },
    {
      name: "Bulk Apothecary",
      emoji: "flavor",
      category:categories[1],
      price: 33.08, barter: false
    },
    {
      name: "Bulk Apothecary",
      emoji: "oil",
      category:categories[1],
      price: 22.98, barter: false
    },
    {
      name: "Bulk Apothecary",
      emoji: "flavor",
      category:categories[1],
      price: 16.40, barter: false
    },
    {
      name: "Bulk Apothecary",
      emoji: "Emu oil",
      category:categories[1],
      price: 65.98, barter: false
    },
    {
      name: "CVS",
      emoji: "cooking",
      category:categories[1],
      price: 18.97, barter: false
    },
    {
      name: "CVS",
      emoji: "cooking",
      category:categories[1],
      price: 25.80, barter: false
    },
    {
      name: "dollar store",
      emoji: "agava",
      category:categories[1],
      price: 1.00, barter: false
    },
    {
      name: "home depo",
      emoji: "grow rooms",
      category:categories[8],
      price: 182.80, barter: false
    },
    {
      name: "Leapin Lizards",
      emoji: "herbs",
      category:categories[1],
      price: 14.15, barter: false
    },
    {
      name: "Leroux Kitchen",
      emoji: "flavor",
      category:categories[1],
      price: 15.97, barter: false
    },
    {
      name: "Lois",
      emoji: "cooking",
      category:categories[1],
      price: 59.98, barter: false
    },
    {
      name: "Lois",
      emoji: "Topicals-goats milk",
      category:categories[1],
      price: 5.40, barter: false
    },
    {
      name: "Lois",
      emoji: "Topicals-orange water",
      category:categories[1],
      price: 3.99, barter: false
    },
    {
      name: "Lois",
      emoji: "MCT",
      category:categories[1],
      price: 32.99, barter: false
    },
    {
      name: "lorann oils",
      emoji: "flavor",
      category:categories[1],
      price: 22.80, barter: false
    },
    {
      name: "lorann oils",
      emoji: "flavor",
      category:categories[1],
      price: 189.7, barter: false
    },
    {
      name: "Mardens",
      emoji: "gelitne",
      category:categories[1],
      price: 18.5, barter: false
    },
    {
      name: "mountain Rose",
      emoji: "herbs/wax",
      category:categories[1],
      price: 126.25, barter: false
    },
    {
      name: "Natural Happiness",
      emoji: "CBG RSO",
      category:categories[1],
      price: 60.00, barter: false
    },
    {
      name: "Pharmaca",
      emoji: "calm",
      category:categories[1],
      price: 46.72, barter: false
    },
    {
      name: "Sams Club",
      emoji: "cocnut oil",
      category:categories[1],
      price: 9.80, barter: false
    },
    {
      name: "Sams Club",
      emoji: "Baking Soda",
      category:categories[1],
      price: 7.74, barter: false
    },
    {
      name: "Sams Club",
      emoji: "Callagen",
      category:categories[1],
      price: 18.5, barter: false
    },
    {
      name: "shaws",
      emoji: "cooking",
      category:categories[1],
      price: 41.93, barter: false
    },
    {
      name: "true value",
      emoji: "cooking",
      category:categories[1],
      price: 10.62, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "nutrients",
      category:categories[1],
      price: 80.00, barter: false
    },
    {
      name: "walmrt",
      emoji: "cooking",
      category:categories[1],
      price: 10.40, barter: false
    },
    {
      name: "zNatural",
      emoji: "cashw milk",
      category:categories[1],
      price: 18
    },
    {
      name: "zNatural",
      emoji: "Coconut sugar",
      category:categories[1],
      price: 13.5, barter: false
    },
    {
      name: "zNatural",
      emoji: "Erythritol",
      category:categories[1],
      price: 14.08, barter: false
    },
    {
      name: "zNatural",
      emoji: "Papaya Powder",
      category:categories[1],
      price: 19.99, barter: false
    },
    {
      name: "zNatural",
      emoji: "Pineapple powder",
      category:categories[1],
      price: 19.99, barter: false
    },
    {
      name: "zNatural",
      emoji: "Tart Cherry",
      category:categories[1],
      price: 24.99, barter: false
    },
    {
      name: "zNatural",
      emoji: "Coconut sugar",
      category:categories[1],
      price: 39.9
    },
    {
      name: "zNatural",
      emoji: "cooking",
      category:categories[1],
      price: 41.99, barter: false
    },
    {
      name: "zNatural",
      emoji: "Coconut sugar",
      category:categories[1],
      price: 40.80, barter: false
    },
    {
      name: "zNatural",
      emoji: "Erythritol",
      category:categories[1],
      price: 54.99, barter: false
    },
    {
      name: "AC moore",
      emoji: "package",
      category:categories[16],
      price: 2.99, barter: false
    },
    {
      name: "Bulk Apothecary",
      emoji: "8oz bottles",
      category:categories[16],
      price: 19.00, barter: false
    },
    {
      name: "Bulk Apothecary",
      emoji: "bottle pumps",
      category:categories[16],
      price: 14.00, barter: false
    },
    {
      name: "Chemistrystore",
      emoji: "tubes",
      category:categories[16],
      price: 11.40, barter: false
    },
    {
      name: "dollar store",
      emoji: "shrinkwrap",
      category:categories[16],
      price: 1.00, barter: false
    },
    {
      name: "Staples",
      emoji: "office",
      category:categories[16],
      price: 82.80, barter: false
    },
    {
      name: "true value",
      emoji: "package",
      category:categories[16],
      price: 12.65
    },
    {
      name: "Uline",
      emoji: "shrink tube",
      category:categories[16],
      price: 38.00, barter: false
    },
    {
      name: "State of Mind",
      emoji: "tshirts",
      category:categories[17],
      price: 160.00, barter: false
    },
    {
      name: "Griffen Greenhouse",
      emoji: "5 gallon plant pots",
      category:categories[7],
      price: 78.22
    },
    {
      name: "Handsink-rest equiment store",
      emoji: "equipment",
      category:categories[7],
      price: 245.00, barter: false
    },
    {
      name: "High Tech",
      emoji: "humidity packs",
      category:categories[7],
      price: 69.5, barter: false
    },
    {
      name: "Home Depot",
      emoji: "5 buckets w/lids",
      category:categories[7],
      price: 6.95, barter: false
    },
    {
      name: "Home Depot",
      emoji: "5 buckets w/lids",
      category:categories[7],
      price: 6.95, barter: false
    },
    {
      name: "Home depot",
      emoji: "trimming sissors",
      category:categories[7],
      price: 75.00, barter: false
    },
    {
      name: "Indendent power",
      emoji: "grow rooms-thermo pex",
      category:categories[7],
      price: 348.18, barter: false
    },
    {
      name: "Truffle made",
      emoji: "molds",
      category:categories[7],
      price: 69.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "cloning machine",
      category:categories[7],
      price: 21.99, barter: false
    },
    {
      name: "Urban Garden",
      emoji: "Cloner",
      category:categories[7],
      price: 242.31
    },
    {
      name: "High Tech",
      emoji: "Green Leds-light bulbs",
      category:categories[9],
      price: 22.9
    },
    {
      name: "Home depot",
      emoji: "no description",
      category:categories[9],
      price: 376.27
    },
    {
      name: "Napa",
      emoji: "pump oil",
      category:categories[9],
      price: 9.22
    },
    {
      name: "Proverda lab",
      emoji: "Testing",
      category:categories[18],
      price: 270.00, barter: false
    },
    {
      name: "State of Maine",
      emoji: "Grow license-annual",
      category:categories[13],
      price: 1200.00, barter: false
    },
    {
      name: "home depo",
      emoji: "grow rooms",
      category:categories[10],
      price: 291.5, barter: false
    },
    {
      name: "oakhill",
      emoji: "grow rooms",
      category:categories[10],
      price: 61.91, barter: false
    },
    {
      name: "cmp",
      emoji: "Electric",
      category:categories[2],
      price: 400.00, barter: false
    },
    {
      name: "cmp",
      emoji: "Electric",
      category:categories[2],
      price: 400.00, barter: false
    },
    {
      name: "cmp",
      emoji: "Electric",
      category:categories[2],
      price: 450.00, barter: false
    },
    {
      name: "cmp",
      emoji: "Electric",
      category:categories[2],
      price: 350.00, barter: false
    },
    {
      name: "CVS",
      emoji: "batt/cable-office exp",
      category:categories[15],
      price: 30.5, barter: false
    },
    {
      name: "CVS",
      emoji: "cable-office exp",
      category:categories[15],
      price: 12.99, barter: false
    },
    {
      name: "Staples",
      emoji: "office supplies",
      category:categories[15],
      price: 113.11
    },
    {
      name: "State of Maine",
      emoji: "LLC license-annual",
      category:categories[14],
      price: 275
    },
    {
      name: "State of Maine",
      emoji: "Employee licenseto work with another care giver",
      category:categories[14],
      price: 51.00, barter: false
    },
    {
      name: "State of Maine",
      emoji: "IIC audult use license-annual-dispensery",
      category:categories[14],
      price: 50.00, barter: false
    },
    {
      name: "State of Maine",
      emoji: "Back ground check-license-annual",
      category:categories[14],
      price: 31.00, barter: false
    },
    {
      name: "State of Maine",
      emoji: "Annual report",
      category:categories[14],
      price: 185.00, barter: false
    }
  
]);

  console.log(items)

  process.exit();

})();