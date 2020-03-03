'use strict'
// 
// global var
var itemsEmg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg'
    , 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];

var firstItemImage = document.querySelector('#first-item-img');
var secundItemImage = document.querySelector('#secund-item-img');
var thieredItemImage = document.getElementById('thered-item-img');
var groupItemSection = document.getElementById('all-items');
var firstImageRandom;
var secundImageRandom;
var thiredImageRandom;

var itemsArr = [];//an array to store all  objects
var totalClicks = 0;

function Items(name) {
    this.name = name.split('.')[0]
    this.UrlImages = `images/${this.name}.jpg`;
    itemsArr.push(this);
    this.viwe = 0;
    this.clicsks =0;
}


function pickRandomImages() {
    firstImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
    secundImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
    thiredImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];


    firstItemImage.setAttribute('src', firstImageRandom.UrlImages);
    firstItemImage.setAttribute('alt', firstImageRandom.name);

    secundItemImage.setAttribute('src', secundImageRandom.UrlImages);
    secundItemImage.setAttribute('alt', secundImageRandom.name);

    thieredItemImage.setAttribute('src', thiredImageRandom.UrlImages);
    thieredItemImage.setAttribute('alt', thiredImageRandom.name);

    while(firstItemImage.alt === secundItemImage.alt || firstItemImage.alt === thieredItemImage.alt || secundItemImage.alt === thieredItemImage.alt) {
        console.log('majd');
        firstImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
        secundImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
        thiredImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
        firstItemImage.setAttribute('src', firstImageRandom.UrlImages);
    firstItemImage.setAttribute('alt', firstImageRandom.name);

    secundItemImage.setAttribute('src', secundImageRandom.UrlImages);
    secundItemImage.setAttribute('alt', secundImageRandom.name);

    thieredItemImage.setAttribute('src', thiredImageRandom.UrlImages);
    thieredItemImage.setAttribute('alt', thiredImageRandom.name);
    
        }

    // firstItemImage.setAttribute('src', firstImageRandom.UrlImages);
    // firstItemImage.setAttribute('alt', firstImageRandom.name);
    // secundItemImage.setAttribute('src', secundImageRandom.UrlImages);
    // secundItemImage.setAttribute('alt', secundImageRandom.name);
    // // 
    // thieredItemImage.setAttribute('src', thiredImageRandom.UrlImages);
    // thieredItemImage.setAttribute('alt', thiredImageRandom.name);
}

for (var i = 0; i < itemsEmg.length; i++) {
    new Items(itemsEmg[i]);
}

// for( var j =0 ; j<itemsArr.length; j++ ){
    // }
//     }
// //     if ( firstItemImage.alt=== itemsArr[j].name){
// //         itemsArr[j].viwe++
// //     }
// //     if ( secundItemImage.alt=== itemsArr[j].name){
// //         itemsArr[j].viwe++
// //     }
// //     // for( var j =0 ; j<itemsArr.length; j++ )
// //     if ( thieredItemImage.alt=== itemsArr[j].name){
// //         itemsArr[j].viwe++
    groupItemSection.addEventListener('click', clicksImagesEvint)
                
    //helper functions
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
pickRandomImages();
function clicksImagesEvint(event){ 
     if (event.target.id === 'first-item-img' || event.target.id === 'secund-item-img' || event.target.id === 'thered-item-img') {
                        // itemsArr.viwe++

        for( var j =0 ; j<itemsArr.length; j++ ){
            if ( firstItemImage.alt=== itemsArr[j].name){
                itemsArr[j].viwe++
            }
            if ( secundItemImage.alt=== itemsArr[j].name){
                itemsArr[j].viwe++
            }
            // for( var j =0 ; j<itemsArr.length; j++ )
            if ( thieredItemImage.alt=== itemsArr[j].name){
              }  itemsArr[j].viwe++
            }
    pickRandomImages();
    totalClicks++;
    
      }
      if (event.target.id === 'first-item-img'){
        firstImageRandom.clicsks++
        // firstImageRandom.viwe++

      }
      if (event.target.id === 'secund-item-img'){
        firstImageRandom.clicsks++
        // firstImageRandom.viwe++

      }
      if (event.target.id === 'thered-item-img'){
        firstImageRandom.clicsks++
        // firstImageRandom.viwe++

      }
      
     
      if (totalClicks === 25) {
        groupItemSection.removeEventListener('click', clicksImagesEvint);
       listItem()
       renderChartResults();
      }

}
for( var j =0 ; j<itemsArr.length; j++ ){
    if ( firstItemImage.alt=== itemsArr[j].name){
        itemsArr[j].viwe++
    }
    if ( secundItemImage.alt=== itemsArr[j].name){
        itemsArr[j].viwe++
    }
    // for( var j =0 ; j<itemsArr.length; j++ )
    if ( thieredItemImage.alt=== itemsArr[j].name){
        itemsArr[j].viwe++
    }
    }
    groupItemSection.addEventListener('click', clicksImagesEvint)
                
    //helper functions
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


// render 
function listItem() {
    var ulE1 = document.getElementById('buss-clicks');
    for (var i = 0; i < itemsArr.length - 1; i++) {
        var liE1 = document.createElement('li');
        liE1.textContent = `${itemsArr[i].name} has ${itemsArr[i].clicsks} clicks and ${itemsArr[i].viwe} view`;
        ulE1.appendChild(liE1);


    }
}
var itemsName = [];
var itemsclick = [];
var ItemsViwe =[];

function renderChartResults(){
  for ( var i= 0 ; i < itemsArr.length ; i++){
    var nameOfArr = itemsArr[i].name
    var likeItems = itemsArr[i].clicsks
    var viewChart = itemsArr[i].viwe

     itemsName.push(nameOfArr);
     itemsclick.push(likeItems);
     ItemsViwe.push(viewChart);

  }

  var ctx = document.getElementById('myItems').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: itemsName,
          datasets: [{
              label: '# clicks',
              data: itemsclick,
              // data:ItemsViwe, 
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            },{
              label: '# view',

              labels : itemsName, 
               data:ItemsViwe, 



          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  
}
