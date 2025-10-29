/* data.js - product data + helper utilities
   Put realistic affiliate links in `link` for each product.
*/
const SITE_AFFILIATE_TAG = "yourtag-21"; // replace with your Amazon affiliate tag if needed

const PRODUCTS = [
  { id:1, name:"HP Pavilion Laptop", category:"Electronics", price:59999, mrp:65000, discount:"8%", rating:4, image:"https://m.media-amazon.com/images/I/71S8U9VzLTL._AC_SL1500_.jpg", link:"https://amzn.to/3xABC01" },
  { id:2, name:"Apple iPhone 15", category:"Electronics", price:74999, mrp:79999, discount:"6%", rating:5, image:"https://m.media-amazon.com/images/I/61lKQWyMdDL._AC_SL1500_.jpg", link:"https://amzn.to/3xDEF02" },
  { id:3, name:"Samsung Galaxy S24", category:"Electronics", price:77999, mrp:82000, discount:"5%", rating:4, image:"https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_SL1500_.jpg", link:"https://amzn.to/3xGHI03" },
  { id:4, name:"Sony WH-1000XM5 Headphones", category:"Electronics", price:29999, mrp:34999, discount:"14%", rating:5, image:"https://m.media-amazon.com/images/I/61+P3f2lTTL._AC_SL1500_.jpg", link:"https://amzn.to/3xJKL04" },
  { id:5, name:"Canon EOS 1500D DSLR", category:"Electronics", price:38999, mrp:42999, discount:"9%", rating:4, image:"https://m.media-amazon.com/images/I/914hFeTU2-L._AC_SL1500_.jpg", link:"https://amzn.to/3xMNO05" },
  { id:6, name:"Men's Cotton T-Shirt", category:"Fashion", price:499, mrp:999, discount:"50%", rating:4, image:"https://m.media-amazon.com/images/I/71I8tG2prXL._AC_UL1500_.jpg", link:"https://amzn.to/3xPQR06" },
  { id:7, name:"Women's Kurti Set", category:"Fashion", price:999, mrp:1599, discount:"37%", rating:5, image:"https://m.media-amazon.com/images/I/71yzwPC5vVL._AC_UL1500_.jpg", link:"https://amzn.to/3xSTU07" },
  { id:8, name:"Leather Handbag", category:"Fashion", price:1799, mrp:2499, discount:"28%", rating:4, image:"https://m.media-amazon.com/images/I/71lEqsW2MNL._AC_UL1500_.jpg", link:"https://amzn.to/3xVWX08" },
  { id:9, name:"Men's Running Shoes", category:"Fashion", price:2499, mrp:3499, discount:"29%", rating:5, image:"https://m.media-amazon.com/images/I/71fwbMmH3gL._AC_UL1500_.jpg", link:"https://amzn.to/3xYZA09" },
  { id:10, name:"Smart Analog Watch", category:"Fashion", price:2999, mrp:4999, discount:"40%", rating:4, image:"https://m.media-amazon.com/images/I/71qOybBvGXL._AC_UL1500_.jpg", link:"https://amzn.to/3xBCD10" },
  { id:11, name:"L'Oreal Shampoo", category:"Beauty", price:499, mrp:699, discount:"28%", rating:4, image:"https://m.media-amazon.com/images/I/61xY3kHwEpL._SL1500_.jpg", link:"https://amzn.to/3xLO11" },
  { id:12, name:"Maybelline Mascara", category:"Beauty", price:599, mrp:799, discount:"25%", rating:5, image:"https://m.media-amazon.com/images/I/61x7yDJ7DNL._SL1500_.jpg", link:"https://amzn.to/3xMA12" },
  { id:13, name:"Nivea Body Lotion", category:"Beauty", price:349, mrp:499, discount:"30%", rating:4, image:"https://m.media-amazon.com/images/I/61dtYBzKycL._SL1500_.jpg", link:"https://amzn.to/3xNI13" },
  { id:14, name:"Beardo Perfume", category:"Beauty", price:699, mrp:999, discount:"30%", rating:5, image:"https://m.media-amazon.com/images/I/61IDnYugE8L._SL1500_.jpg", link:"https://amzn.to/3xOP14" },
  { id:15, name:"Lakme Face Cream", category:"Beauty", price:399, mrp:599, discount:"33%", rating:4, image:"https://m.media-amazon.com/images/I/51AqK5nEgaL._SL1000_.jpg", link:"https://amzn.to/3xPQ15" },
  { id:16, name:"Prestige Cooker", category:"Home", price:2499, mrp:2999, discount:"17%", rating:5, image:"https://m.media-amazon.com/images/I/71v3yBRhwhL._SL1500_.jpg", link:"https://amzn.to/3xRS16" },
  { id:17, name:"Philips Mixer Grinder", category:"Home", price:3999, mrp:4999, discount:"20%", rating:5, image:"https://m.media-amazon.com/images/I/61ON2xT+GcL._SL1500_.jpg", link:"https://amzn.to/3xTU17" },
  { id:18, name:"Floral Bedsheet Set", category:"Home", price:799, mrp:1299, discount:"38%", rating:4, image:"https://m.media-amazon.com/images/I/71IR-rRB0sL._SL1500_.jpg", link:"https://amzn.to/3xUV18" },
  { id:19, name:"Nonstick Frying Pan", category:"Home", price:699, mrp:999, discount:"30%", rating:4, image:"https://m.media-amazon.com/images/I/71MzkRLoebL._SL1500_.jpg", link:"https://amzn.to/3xVW19" },
  { id:20, name:"Table Lamp", category:"Home", price:1399, mrp:1999, discount:"30%", rating:4, image:"https://m.media-amazon.com/images/I/61h9QzFqebL._SL1500_.jpg", link:"https://amzn.to/3xWX20" },
  { id:21, name:"Cricket Bat", category:"Sports", price:1899, mrp:2499, discount:"24%", rating:5, image:"https://m.media-amazon.com/images/I/81v8NzoR4kL._SL1500_.jpg", link:"https://amzn.to/3xXY21" },
  { id:22, name:"Football", category:"Sports", price:899, mrp:1199, discount:"25%", rating:4, image:"https://m.media-amazon.com/images/I/81LB0vXbOUL._SL1500_.jpg", link:"https://amzn.to/3xYZ22" },
  { id:23, name:"Gym Dumbbell Set", category:"Sports", price:2299, mrp:2999, discount:"23%", rating:5, image:"https://m.media-amazon.com/images/I/61BPmPaF7aL._SL1500_.jpg", link:"https://amzn.to/3xZA23" },
  { id:24, name:"Yoga Mat", category:"Sports", price:699, mrp:999, discount:"30%", rating:4, image:"https://m.media-amazon.com/images/I/81+bbvGz0VL._SL1500_.jpg", link:"https://amzn.to/3xAB24" },
  { id:25, name:"Cycling Helmet", category:"Sports", price:1499, mrp:1999, discount:"25%", rating:5, image:"https://m.media-amazon.com/images/I/71NKo74UuBL._SL1500_.jpg", link:"https://amzn.to/3xBC25" },
  { id:26, name:"Badminton Racket", category:"Sports", price:999, mrp:1499, discount:"33%", rating:4, image:"https://m.media-amazon.com/images/I/61FMEpX7aAL._SL1500_.jpg", link:"https://amzn.to/3xCD26" },
  { id:27, name:"Water Bottle", category:"Sports", price:299, mrp:499, discount:"40%", rating:5, image:"https://m.media-amazon.com/images/I/51PoCXgNn3L._SL1000_.jpg", link:"https://amzn.to/3xDE27" },
  { id:28, name:"Camping Tent", category:"Sports", price:4499, mrp:5999, discount:"25%", rating:4, image:"https://m.media-amazon.com/images/I/81iRZp5z1ML._SL1500_.jpg", link:"https://amzn.to/3xEF28" },
  { id:29, name:"Trekking Shoes", category:"Sports", price:2799, mrp:3499, discount:"20%", rating:5, image:"https://m.media-amazon.com/images/I/81I8YqYF4RL._SL1500_.jpg", link:"https://amzn.to/3xFG29" },
  { id:30, name:"Table Tennis Bat", category:"Sports", price:699, mrp:899, discount:"22%", rating:4, image:"https://m.media-amazon.com/images/I/61NArF-8HwL._SL1500_.jpg", link:"https://amzn.to/3xGH30" }
];

/* helper - sanitize affiliate link by appending tag if missing (naive) */
function affiliateLink(url){
  try{
    const u = new URL(url);
    // if already has tag parameter, return
    if(u.searchParams.has('tag')) return url;
    if(SITE_AFFILIATE_TAG && SITE_AFFILIATE_TAG !== "yourtag-21"){
      u.searchParams.set('tag', SITE_AFFILIATE_TAG);
      return u.toString();
    }
    return url;
  }catch(e){
    return url;
  }
}
