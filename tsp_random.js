//	Done! :D

let cities = [];
let nodeCount = 5

let record = Infinity;

let citiesRecord = [];

function setup() {
  createCanvas(400, 600);
  
  for (let i = 0; i < nodeCount; i++) {
    let randomXandY = createVector(random(width) , random(0, height/2.5));
    
    cities.push(randomXandY);
  }
  
  citiesRecord = cities.slice();
}

//-----------------------------------------------------------

function draw() {
  background(220);
  
  //	Drawing some balls
  fill(255);
    stroke(200, 0, 255);
    strokeWeight(2);
  for (let i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 10, 10); 
  }
  
  //	Drawing some lines
  
  for (let i = 0; i < cities.length - 1; i++) {
    
   	fill(255);
    strokeWeight(2);
    
   	line(cities[i].x, cities[i].y, cities[i + 1].x, cities[i + 1].y);
    
  }
  
  
  
  
  //-------------------------------------------------
  if (distanceCalculator(cities) < record) {
		record = distanceCalculator(cities);
    console.log(record);
    citiesRecord = cities.slice();
  }
  //--------------------------------------------------
  
  
  //	Drawing some record balls
  fill(255);
    stroke(200, 0, 255);
    strokeWeight(2);
  for (let i = 0; i < cities.length; i++) {
    ellipse(citiesRecord[i].x, citiesRecord[i].y + 250, 10, 10); 
  }
  
  //	Drawing some record lines
  
  for (let i = 0; i < cities.length - 1; i++) {
    
   	fill(255);
    strokeWeight(2);
    
   	line(citiesRecord[i].x, citiesRecord[i].y + 250, citiesRecord[i + 1].x, citiesRecord[i + 1].y + 250);
    
  }
  
  let randomCityToMove  = floor(random(cities.length));
  let randomCityToMove2 = floor(random(cities.length));

  move(cities, randomCityToMove, randomCityToMove2);
    
  
  
      
          
    textSize(32);
    fill(0);
    text("Record: " + nfc(record, 2), width/2 - 100, height - 50);
  
}



//------------------------------------------------
//	RNGing to "find" the best path

function distanceCalculator(city) {
  var sum = 0;
  var d;
  
	for (let i = 0; i < city.length - 1; i++) {
    
    d = dist(city[i].x, city[i].y, city[i + 1].x, city[i + 1].y); 
    
    sum += d;
  }
  
  return sum;
  
}



//	another name for a "swap" function

function move(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}



