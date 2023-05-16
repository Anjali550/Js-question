const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// -----

// a. Create a function called signUp which allows user to add to the collection. If user exists, 
// inform the user that he has already an account.

function signUp(userData) {
      let isUserExist = false;
      users.forEach((e) => {
        if (e._id == userData._id) {
          isUserExist = true;
        }
      });
      if (isUserExist) {
        console.log("User already existed");
      } else {
        users.push(userData);
      }
    }
// b. Create a function called signIn which allows user to sign in to the application

function signIn(userData) {
      let isUserExist = false;
      users.forEach((e) => {
        if (e._id == userData._id) {
          isUserExist = true;
        }
      });
      if (isUserExist) {
        console.log("Logged in Sucessful");
      } else {
        console.log("Please Signup first");
      }
    }




// 3. The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 

function rateProduct(id, ratingDetail) {
  products.forEach((e) => {
    if (e._id == id) {
      e.ratings.push(ratingDetail);
    }
  });
}
rateProduct("hedfcg", { userId: "ddbjsds", rate: 10 });
products.forEach((e) => {
  if (e._id == "hedfcg") {
    console.log(e.ratings);
  }
});
// b. Create a function called averageRating which calculate the average rating of a product

// 4. Create a function called likeProduct. This function will helps to like to the product 
// if it is not liked and remove like if it was liked.
