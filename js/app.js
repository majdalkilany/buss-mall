'use strect'
// 
// global var
var itemsEmg = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair'
    , 'cthulhu', 'dog-duck', 'dragon', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

var firstItemImage = document.querySelector('#first-item-img');
var secundItemImage = document.querySelector('#secund-item-img');
var thieredItemImage = document.getElementById('thered-item-img');
var groupItemSection = document.getElementById('all-items');
var vote = 0;

var itemsArr = [];//an array to store all  objects
var totalClicks = 1;

function Items(name) {
    this.name = name;
    this.UrlImages = `images/${this.name}.jpg`;
    itemsArr.push(this);

}
function pickRandomImages() {
    var firstImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];

    var secundImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
    var thiredImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
    while (firstItemImage ===secundItemImage || firstItemImage === thieredItemImage || secundItemImage === thieredItemImage ) {
        var firstImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];

        var secundImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
        var thiredImageRandom = itemsArr[randomNumber(0, itemsArr.length - 1)];
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
    pickRandomImages();

}
//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 
function clickImage(e) {
    if (e.target.id === 'first-item-img' || e.target.id === 'secund-item-img' || e.target.id === 'thered-item-img') {
        pickRandomImages();
        totalClicks++;
    }
   
       
        
        
}

groupItemSection.addEventListener('click', clickImage);
if (totalClicks === 25){
    //  clickImage().addEventListener('click', function (){
        groupItemSection.removeEventListener('click', clickImage);
        totalClicks++;
        firstItemImage.remove();
        secundItemImage.remove();
        thieredItemImage.remove();
        console.log('finished');
    //  });  
    }
function listItem(){
    var ulE1 =document.getElementById('buss-clicks');
    for (var i=0 ;i<itemsArr.length-1 ;i++){
        var liE1 =document.createElement('li');
        liE1.textContent =`${itemsArr[i].name} has ${itemsArr[i].click} clicks and ${itemsArr[i].vots} view`;
        ulE1.appendChild(liE1);

    
    }}
document.write(listItem())