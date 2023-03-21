function doFirst() {
  var button = document.getElementById("button");
  button.addEventListener("click", save, false);
  display();
}

function save(){
  var key = document.getElementById("key").value;
  var value = document.getElementById("value").value;
  // set the item
  sessionStorage.setItem(key, value);
  display();
  key.value = "book";
  value.value = "books";
}
function display(){
  var display = document.getElementById("display");
  display.innerHTML = "";
  for(var i = 0; sessionStorage.length >i; i++) {
    var a = sessionStorage.key(i);
    // retrieve the item
    var b = sessionStorage.getItem(a);
    display.innerHTML=window.location="data.html";
  }
}
function clear(){
  sessionStorage.clear();
  location.reload();
}
window.addEventListener("load", doFirst, false);