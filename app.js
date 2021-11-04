'use strict';

const myContainer = document.querySelector('section');
// const myButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
// const results = document.querySelector('ul');

let allProducts = [];
let clicks = 0;
const clicksAllowed = 25;
let indexArray = [];

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `assets/${name}.${fileExtension}`;
  this.likes = 0;
  this.views = 0;
  this.percentage = 0;
  allProducts.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

function selectRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProduct() {
  // let product1 = selectRandomProduct();
  // let product2 = selectRandomProduct();
  // let product3 = selectRandomProduct();

  while (indexArray.length < 6) {
    // product1 = selectRandomProduct();
    // product2 = selectRandomProduct();
    let ranNum =selectRandomProduct();
    if(!indexArray.includes(ranNum)){
      indexArray.push(ranNum);
    }
  }

  let product1 = indexArray.shift();
  let product2 = indexArray.shift();
  let product3 = indexArray.shift();

  // while (product2 === product3)  {

  //   product2 = selectRandomProduct();
  //   product3 = selectRandomProduct();
  // }

  image1.src = allProducts[product1].src;
  image1.alt = allProducts[product1].name;
  allProducts[product1].views++;
  image2.src = allProducts[product2].src;
  image2.alt = allProducts[product2].name;
  allProducts[product2].views++;
  image3.src = allProducts[product3].src;
  image3.alt = allProducts[product3].name;
  allProducts[product3].views++;
}

function handleProductClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickedProduct = event.target.alt; 

  for (let i = 0; i < allProducts.length; i++) {
    if (clickedProduct === allProducts[i].name) {
      allProducts[i].likes++;
      allProducts[i].percentage = allProducts[i].likes / clicksAllowed * 100;
      break;
    }

  }
  renderProduct(); 

  if (clicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleProductClick);
    // myButton.addEventListener('click', handleButtonClick);
    // myButton.className = 'clicks-allowed'; //why
    alert('You have reached the end of 25 rounds! Now click VIEW RESULTS below to see your stats.');
    renderChart();
  }
}

// function handleButtonClick() {
//   for (let i = 0; i < allProducts.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allProducts[i].name} had ${allProducts[i].views} view and was clicked ${allProducts[i].likes} times. The percentage of click per view is ${allProducts[i].percentage}%`;
//     results.appendChild(li);
//   };
// }


function renderChart() {
  let prodNames = [];
  let prodLikes = [];
  let prodViews = [];
  for (let i = 0; i < allProducts.length; i++) {
    prodNames.push(allProducts[i].name);
    prodLikes.push(allProducts[i].likes);
    prodViews.push(allProducts[i].views);
  }
  // console.log(prodLikes);

  const data = {
    labels: prodNames,
    datasets: [{
      label: 'Likes',
      data: prodLikes,
      backgroundColor: [
        'rgba(42, 233, 138, 0.7)'
      ],
      borderColor: [
        'rgb(42, 233, 138)'
      ],
      borderWidth: 5
    },
    {
      label: 'Views',
      data: prodViews,
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgb(255, 159, 64)'
      ],
      borderWidth: 8
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  let canvasChart = document.getElementById('myChart');
  const myChart = new Chart(canvasChart,config);
}

renderProduct();
myContainer.addEventListener('click', handleProductClick);

