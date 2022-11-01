const tourist = {
  _id: "635a25e99739a46380341c44",
  username: "abcd",
  name: "xyz",
  phone: 123123123123,
  email: "pst@gmail.com",
  active_bookings: [],
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
    name: "Julie",
    title: "Modern Apt - Vibrant Neighborhood!",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-8.jpg",
    type: "Entire apartment",
    price: "$75",
    rating: 4,
  },
  {
    name: "Pamela",
    title: "Modern, Well-Appointed Room",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-0.jpg",
    type: "Private room",
    price: "$80",
    rating: 5,
  },
  {
    name: "Pamela",
    title: "Modern, Well-Appointed Room",
    placeImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg",
    profileImg:
      "https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-0.jpg",
    type: "Private room",
    price: "$80",
    rating: 3.2,
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
    profileImg:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-8.jpg",
    comment:
      "  One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections",
  },
  {
    name: "Princess Leia",
    date: "Jun 2018",
    rating: 3.3,
    profileImg:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-3.jpg",
    comment:
      "    His room, a proper human room although a little too small, lay peacefully between its four familiar walls. Acollection of textile samples lay spread out on the table.",
  }
];

const listings=[
    {
        title:"Modern, Well-Appointed Room",
        type:"House",
        bed:3,
        area:"350 m",
        location:"San Francisco",
        washrooms:2,
        price: "150k",
        placeImg:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1484154218962-a197022b5858.jpg"
    },
    {
        title:"Cute Quirky Garden apt, NYC adjacent",
        type:"Apartment",
        bed:2,
        area:"85 m",
        location:"San Francisco",
        washrooms:1,
        price: "65k",
        placeImg:"https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1426122402199-be02db90eb90.jpg"
    },
]

export { tourist, blogs, comments, places, testimonials, reviews, listings };
