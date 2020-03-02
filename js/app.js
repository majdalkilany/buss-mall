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

    if  (firstImageRandom.alt === secundImageRandom.alt || firstImageRandom.alt === thiredImageRandom.alt || secundImageRandom.alt === thiredImageRandom.alt) {
        console.log('majd');
        firstImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
        secundImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
        thiredImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
    
        }

    firstItemImage.setAttribute('src', firstImageRandom.UrlImages);
    firstItemImage.setAttribute('alt', firstImageRandom.name);
    secundItemImage.setAttribute('src', secundImageRandom.UrlImages);
    secundItemImage.setAttribute('alt', secundImageRandom.name);
    // 
    thieredItemImage.setAttribute('src', thiredImageRandom.UrlImages);
    thieredItemImage.setAttribute('alt', thiredImageRandom.name);
}

for (var i = 0; i < itemsEmg.length; i++) {
    new Items(itemsEmg[i]);
}
pickRandomImages();
function clicksImagesEvint(event){ 
     if (event.target.id === 'first-item-img' || event.target.id === 'secund-item-img' || event.target.id === 'thered-item-img') {
    pickRandomImages();
    totalClicks++;
      }
      if (event.target.id === 'first-item-img'){
        firstImageRandom.clicsks++
        firstImageRandom.viwe++

      }
      if (event.target.id === 'secund-item-img'){
        firstImageRandom.clicsks++
        firstImageRandom.viwe++

      }
      if (event.target.id === 'thered-item-img'){
        firstImageRandom.clicsks++
        firstImageRandom.viwe++

      }
      
     
      if (totalClicks === 25) {
        groupItemSection.removeEventListener('click', clicksImagesEvint);
       listItem()
      }

}
groupItemSection.addEventListener('click', clicksImagesEvint)
        
//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// // eventlistener
// function clickImage(e) {
//     // console.log(e);
//     // console.log(e.target);
//     groupItemSection.addEventListener('click', clickImage);
//       if (e.target.id === 'first-item-img' || e.target.id === 'secund-item-img' || e.target.id === 'thered-item-img') {
//         pickRandomImages();
//         totalClicks++;
//         console.log(totalClicks + '  majd')
        
//     }
//     for (var i = 0 ; i < itemsArr.length ; i++ ){
//     if( firstItemImage.alt = itemsArr[i].name) {
//         itemsArr[i].viwe++;
// // console.log(viwe + "value")
//         // console.log(event.target.id)
//         // console. log('a',this.viwe)
//     }

//     if( secundItemImage.alt = itemsArr[i].name) {
//         itemsArr[i].viwe++;
// // console.log(viwe + "value")
//         // console.log(event.target.id)
//         // console. log('a',this.viwe)
//     }
    
//     if( thieredItemImage.alt = itemsArr[i].name) {
//         itemsArr[i].viwe++;
// // console.log(viwe + "value")
//         // console.log(event.target.id)
//         // console. log('a',this.viwe)
//     }
// }
// }




// });
// }
function listItem() {
    var ulE1 = document.getElementById('buss-clicks');
    for (var i = 0; i < itemsArr.length - 1; i++) {
        var liE1 = document.createElement('li');
        liE1.textContent = `${itemsArr[i].name} has ${itemsArr[i].clicsks} clicks and ${itemsArr[i].viwe} view`;
        ulE1.appendChild(liE1);


    }
}
// listItem()