const couponContainer = document.getElementById("coupon-container");

const coupons = [
  {
    title: "Green Heaven",
    description: "Get 20% off",
    description1: "On any meal above $20",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/52/b4/63/green-heaven-restaurant.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Vegan Delight",
    description: "5% Off",
    description1: "Buy one, ",
    image: "https://images.happycow.net/venues/1024/10/04/hcmp100479_609162.jpeg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },

  {
    title: "Sustainable Eats",
    description: "Save $5",
    description: "On Meal",
    image: "https://www.plantswitch.com/wp-content/uploads/2022/01/people-enjoying-food-sustainable-restaurant.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Smoothie Heaven",
    description: "25% Off",
    description1: "Buy 2 smoothies",
    image: "https://toasttab.s3.amazonaws.com/restaurant_service/restaurants/d643cb7b-621d-4ecf-b714-dc337638eace/Restaurant/bc8ec968-5c5e-4166-8378-5f232314a33e.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },

  {
    title: "Pasta Paradise",
    description: "10% off",
    description1: "On  pasta dish",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTmnF-dFWYaBi_LSPR0-3ZLpsSTQjMfjdtQ&usqp=CAU",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Sweet Tooth",
    description: "$25 Off",
    description1: "Free dessert ",
    image: "https://www.dayton.com/resizer/JhQud1_Wirz25i6VWwDtWuXpD38=/814x458/cloudfront-us-east-1.images.arcpublishing.com/coxohio/D7DBMBUSP5AG5JRNAR4RJ24YCU.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Sustainable Eats",
    description: "Save $5",
    description: "On Meal",
    image: "https://www.plantswitch.com/wp-content/uploads/2022/01/people-enjoying-food-sustainable-restaurant.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Smoothie Heaven",
    description: "25% Off",
    description1: "Buy 2 smoothies",
    image: "https://toasttab.s3.amazonaws.com/restaurant_service/restaurants/d643cb7b-621d-4ecf-b714-dc337638eace/Restaurant/bc8ec968-5c5e-4166-8378-5f232314a33e.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Taco Fiesta",
    description: "60% Off ",
    description1: "Get a free drink ",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/fe/17/7e/taco-fiesta.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Pizza Party",
    description: "15% off ",
    description1: "On large pizza",
    image: "https://d1ralsognjng37.cloudfront.net/48afe923-45d9-4f06-a39e-f8e42dbb79a4.webp",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Sustainable Eats",
    description: "Save $5",
    description: "On Meal",
    image: "https://www.plantswitch.com/wp-content/uploads/2022/01/people-enjoying-food-sustainable-restaurant.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Smoothie Heaven",
    description: "25% Off",
    description1: "Buy 2 smoothies",
    image: "https://toasttab.s3.amazonaws.com/restaurant_service/restaurants/d643cb7b-621d-4ecf-b714-dc337638eace/Restaurant/bc8ec968-5c5e-4166-8378-5f232314a33e.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
  {
    title: "Wrap It Up",
    description: "50% off",
    description: "Buy a wrap",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/c8/55/77/outside-our-villiers.jpg",
    qrCode: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Qrcode_wikipedia.jpg"
  },
];

function displayCoupons() {
  let output = "";
  coupons.forEach((coupon, index) => {
    output += `
      <div class="coupon">
      <div class="left">
        <div style="color:white">${coupon.title}</div>
      </div>
      <div class="center">
        <div class="copoun-image" style="background-image: url(${coupon.image});
            background-color: #cccccc;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            padding-top: 25px; ">
          <h2>${coupon.description}</h2>
          <div style="background: rgba(201, 207, 201, 0.43)">
            <h3>Coupon</h3>
            <small>${coupon.description1}</small>
            </br>
            <button class="button2" style="
  transition: all 300ms ease-in;background: white; color:black; border:1px solid green" onclick="clickme(${index})">Redeem Now</button>
  
          </div>
        </div>
      </div>

      <div class="right">
        <div class="qr-image"></div>
        </div>

    </div>
    `;
  });
  couponContainer.innerHTML = output;
  addClaimEventListeners();
}


function addClaimEventListeners() {
  console.log('sdfsfsdfsdf')
  const claimButtons = document.querySelectorAll(".claim-btn");
  claimButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const claimedElement = event.target.nextElementSibling;
      claimedElement.style.display = "flex";
      setTimeout(() => {
        claimedElement.style.display = "none";
      }, 3000);
    });
  });
}

function clickme(ind) {
  console.log('ppp')
  let output = "";
  coupons.forEach((coupon, index) => {
    console.log('lllllllllll')
    if (index == ind) {
      output += `
      <div class="coupon" style="color:white;justify-content: center; align-items: center;text-align: center">
        Token has been Redeemed
      </div>
    `
    } else {
      output += `
      <div class="coupon">
      <div class="left">
        <div style="color:white">${coupon.title}</div>
      </div>
      <div class="center">
        <div class="copoun-image" style="background-image: url(${coupon.image});
            background-color: #cccccc;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            padding-top: 25px; ">
          <h2>${coupon.description}</h2>
          <div style="background: rgba(201, 207, 201, 0.43)">
            <h3>Coupon</h3>
            <small>${coupon.description1}</small>
            </br>
            <button class="button2" style="
  transition: all 300ms ease-in;background: white; color:black; border:1px solid green" onclick="clickme(${index})">Redeem Now</button>
  
          </div>
        </div>
      </div>

      <div class="right">
        <div class="qr-image"></div>
        </div>

    </div>
    `;
    }
  });
  couponContainer.innerHTML = output;
  addClaimEventListeners();

}

displayCoupons();



