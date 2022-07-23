function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function addList() {
  
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button4').addEventListener('click', (event) => {
  let element_list = document.getElementById('listpp');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);

  element_list.appendChild(new_li);

});
} 

/*

function getList() {

  let getListA = document.getElementById('list');
}

*/

function removelist() {
  document.getElementById('button-remove').addEventListener('click', (event) => {
    
    let new_rli = document.getElementById('listpp');
    new_rli.removeChild(new_rli.lastElementChild);
}); 
}