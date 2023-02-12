//excercise 2. DOM manipulation
function whenClicked() {
  document.getElementById("button").style.backgroundColor= '#215';
document.getElementById('container').innerHTML += '<h1>This is the h1.</h1>'
document.getElementById("button").disabled = 'true';
}

//excercise 3. Async API calls

async function getData() {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  console.log(data);

  if (data.lenght < 150) {
    return document.getElementById("container").innerHTML = '<p>data</p>';
  } 
}

getData();
getData();
getData();

//excercise 4. Class  //I didn't have time to finish :(
class Product {
  constructor(price, name) {
this.price = price;
this.name = name;
  }

  logProduct() {
    console.log("This is the" + this.price + "and this is the" + this.name)
  }
  

}

let product = new Product ("50 dkk", glass);

console.log(product)
console.log(logProduct())


