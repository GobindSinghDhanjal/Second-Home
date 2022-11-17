const tourist = {
  _id: "635a25e99739a46380341c44",
  username: "abcd",
  name: "xyz",
  phone: 123123123123,
  email: "pst@gmail.com",
  active_bookings: {
    username: "Abcd",
    title: "Modern Apt - Vibrant Neighborhood",
    numOfNights: 3,
    checkIn: "Apr 17",
    checkOut: "Apr 18",
    adress: "Ap #867, 859 Sit Rd., London",
    phone: "+421 454 897 545",
    host: "Jack London",
    price:"500000"
  },
  prev_bookings: ["xcvxcv"],
  review_id: 1213,
  __v: 0,
  password: "xyz",
};

const blogs = [
  {
    name: "Travel",
    date: "January 20, 2016",
    imageUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg",
    title: "Autumn fashion tips and tricks",
    description:
      "Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege...",
  },
  {
    name: "LIVING",
    date: "January 20, 2016",
    imageUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1522771739844-6a9f6d5f14af.jpg",
    title: "Newest photo apps",
    description:
      "ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibu...",
  },
  {
    name: "TRAVEL",
    date: "January 16, 2016",
    imageUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1482463084673-98272196658a.jpg",
    title: "Best books about Photography",
    description:
      "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Mauris placerat eleif...",
  },
];

const comments = [
  {
    name: "Julie Alma",
    imageUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-0.jpg",
    date: "September 23, 2017 at 12:00 am",
    comment:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    name: "Louise Armero",
    imageUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-8.jpg",
    date: "September 23, 2017 at 12:00 am",
    comment:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
];

const places = [
  {
    id: 1,
    name: "Julie",
    title: "Modern Apt - Vibrant Neighborhood!",
    description:
      "Our garden basement apartment is fully equipped with everything you need to enjoy your stay. Very comfortable for a couple but plenty of space for a small family. Close to many wonderful Brooklyn attractions and quick trip to Manhattan.",
    description2:
      "Welcome to Brooklyn! We are excited to share our wonderful neighborhood with you. Our modern apartment has a private entrance, fully equipped kitchen, and a very comfortable queen size bed. We are happy to accommodate additional guests with a single bed in the living room, another comfy mattress on the floor and can make arrangements for small children with a portable crib and highchair if requested.",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-8.jpg",
    type: "Entire apartment",
    price: "5000",
    rating: 4,
    location: "Mumbai",
    bed: 3,
    area: "350 m",
    washrooms: 2,
    guests: 4,
    bedroom: 1,
    amenities: [
      "wifi",
      "cable",
      "ac",
      "heater",
      "toiletteries",
      "kitchen",
      "desk",
      "washing",
    ],
  },
  {
    id: 2,
    name: "Pamela",
    description:
      "Our garden basement apartment is fully equipped with everything you need to enjoy your stay. Very comfortable for a couple but plenty of space for a small family. Close to many wonderful Brooklyn attractions and quick trip to Manhattan.",
    description2:
      "Welcome to Brooklyn! We are excited to share our wonderful neighborhood with you. Our modern apartment has a private entrance, fully equipped kitchen, and a very comfortable queen size bed. We are happy to accommodate additional guests with a single bed in the living room, another comfy mattress on the floor and can make arrangements for small children with a portable crib and highchair if requested.",
    title: "Modern, Well-Appointed Room",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-0.jpg",
    type: "Private room",
    price: "35000",
    rating: 5,
    location: "Delhi",
    bed: 3,
    area: "350 m",
    washrooms: 2,
    guests: 4,
    bedroom: 1,
    amenities: [
      "wifi",
      "cable",
      "ac",
      "heater",
      "toiletteries",
      "kitchen",
      "desk",
      "washing",
    ],
  },
  {
    id: 3,
    name: "Not Pamela",
    description:
      "Our garden basement apartment is fully equipped with everything you need to enjoy your stay. Very comfortable for a couple but plenty of space for a small family. Close to many wonderful Brooklyn attractions and quick trip to Manhattan.",
    description2:
      "Welcome to Brooklyn! We are excited to share our wonderful neighborhood with you. Our modern apartment has a private entrance, fully equipped kitchen, and a very comfortable queen size bed. We are happy to accommodate additional guests with a single bed in the living room, another comfy mattress on the floor and can make arrangements for small children with a portable crib and highchair if requested.",
    title: "Not Modern, Well-Appointed Room",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-0.jpg",
    type: "Private room",
    price: "60000",
    rating: 3.2,
    location: "Kerala",
    bed: 1,
    area: "350 m",
    washrooms: 1,
    guests: 1,
    bedroom: 1,
    amenities: [
      "wifi",
      "cable",
      "ac",
      "heater",
      "toiletteries",
      "kitchen",
      "desk",
      "washing",
    ],
  },
  {
    id: 3,
    name: "Not Pamela",
    description:
      "Our garden basement apartment is fully equipped with everything you need to enjoy your stay. Very comfortable for a couple but plenty of space for a small family. Close to many wonderful Brooklyn attractions and quick trip to Manhattan.",
    description2:
      "Welcome to Brooklyn! We are excited to share our wonderful neighborhood with you. Our modern apartment has a private entrance, fully equipped kitchen, and a very comfortable queen size bed. We are happy to accommodate additional guests with a single bed in the living room, another comfy mattress on the floor and can make arrangements for small children with a portable crib and highchair if requested.",
    title: "Well-Appointed Room",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-0.jpg",
    type: "Private room",
    price: "10000000",
    rating: 3.2,
    location: "Kerala",
    bed: 1,
    area: "350 m",
    washrooms: 1,
    guests: 1,
    bedroom: 1,
    amenities: [
      "wifi",
      "cable",
      "ac",
      "heater",
      "toiletteries",
      "kitchen",
      "desk",
      "washing",
    ],
  },
];

const testimonials = [
  {
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    name: "Jessica Watson",
  },
  {
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    name: "Not Jessica Watson",
  },
];

const reviews = [
  {
    name: "Padmé Amidala",
    date: "Dec 2018",
    rating: 5,
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-8.jpg",
    comment:
      "  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections",
  },
  {
    name: "Princess Leia",
    date: "Jun 2018",
    rating: 3.3,
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg",
    comment:
      "    His room, a proper human room although a little too small, lay peacefully between its four familiar walls. Acollection of textile samples lay spread out on the table.",
  },
];

const listings = [
  {
    title: "Modern, Well-Appointed Room",
    type: "House",
    bed: 3,
    area: "350 m",
    location: "San Francisco",
    washrooms: 2,
    price: "150k",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg",
  },
  {
    title: "Cute Quirky Garden apt, NYC adjacent",
    type: "Apartment",
    bed: 2,
    area: "85 m",
    location: "San Francisco",
    washrooms: 1,
    price: "65k",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg",
  },
  {
    title: "Brooklyn Life, Easy to Manhattan",
    type: "Apartment",
    bed: 2,
    area: "85 m",
    location: "San Francisco",
    washrooms: 1,
    price: "65k",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1488805990569-3c9e1d76d51c.jpg",
  },
];

const venues = [
  {
    name: "Matt Damon",
    title: "Plutorque",
    rating: 5,
    type: "Restaurant",
    moreTypes: ["Restaurant", "Fusion"],
    description:
      " Proident irure eiusmod velit veniam consectetur id minim irure etnostrud mollit magna velit. Commodo amet proident aliq...",
    imgUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1436018626274-89acd1d6ec9d.jpg",
  },
  {
    name: "Matt Damon",
    title: "Junipoor",
    rating: 4,
    type: "Restaurant",
    moreTypes: ["Music", "Techno", "House"],
    description:
      "Lorem amet ex duis in et fugiat consectetur laborum eiusmodlabore. Quis cupidatat et do dolor in in magna. Eu sit quis...",
    imgUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1466978913421-dad2ebd01d17.jpg",
  },
  {
    name: "Not Matt Damon",
    title: "Not Junipoor",
    rating: 2,
    type: "Restaurant",
    moreTypes: ["Music", "Techno"],
    description:
      "Lorem amet ex duis in et fugiat consectetur laborum eiusmodlabore. Quis cupidatat et do dolor in in magna. Eu sit quis...",
    imgUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/restaurant-1466978913421-dad2ebd01d17.jpg",
  },
];

const messages = [
  {
    id: "select_message_0",
    name: "Meredith Goodwin",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-0.jpg",
    type: "Double Room",
    date: "February 16, 2019",
    favourite: true,
    message:
      " One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections",
  },
  {
    id: "select_message_1",
    name: "Fisher Bauer",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-2.jpg",
    type: "Double Room",
    date: " March 10, 2019",
    favourite: false,
    message:
      " One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections",
  },
  {
    id: "select_message_2",
    name: "Meredith Goodwin",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-0.jpg",
    type: "Double Room",
    date: "February 16, 2019",
    favourite: true,
    message:
      " One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections",
  },
];

const allBookings = [
  {
    title: "Modern, Well-Appointed Room",
    imageUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg",
    rating: 3.2,
    date: "March 2019",
    type: "Private room",
  },
  {
    title: "Cute Quirky Garden apt, NYC adjacent",
    imageUrl:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg",
    rating: 4.5,
    date: "March 2019",
    type: "Entire apartment",
  },
];

const guides=[
  {
    name:"New York",
    imgUrl:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/new-york.jpg",
    description:"The big apple"
  },
  {
    name:"Paris",
    imgUrl:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/paris.jpg",
    description:"Artist capital of Europe"
  },
  {
    name:"New York",
    imgUrl:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/new-york.jpg",
    description:"The big apple"
  },
  {
    name:"Paris",
    imgUrl:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/paris.jpg",
    description:"Artist capital of Europe"
  },
  {
    name:"New York",
    imgUrl:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/new-york.jpg",
    description:"The big apple"
  },
  {
    name:"Paris",
    imgUrl:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/paris.jpg",
    description:"Artist capital of Europe"
  }

]


export {
  tourist,
  blogs,
  comments,
  places,
  testimonials,
  reviews,
  listings,
  venues,
  messages,
  allBookings,
  guides
};
