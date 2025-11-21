let price = 100;

function updatePrice(){
  price += (Math.random()*10 - 5);
  document.getElementById("livePrice")?.innerHTML = price.toFixed(2);
  document.getElementById("priceDash")?.innerHTML = price.toFixed(2);
}
setInterval(updatePrice, 1500);


function buy(){
  alert("You bought at price: " + price.toFixed(2));
}

function sell(){
  alert("You sold at price: " + price.toFixed(2));
}
