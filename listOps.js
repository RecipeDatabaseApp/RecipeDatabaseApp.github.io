const chkTemplate = "<div id=\"[div_id]\"><input type=\"checkbox\" id=\"[chk_id]\" onclick=\"checkOff('[div_id]')\"><label for=\"[chk_id]\">[chk_txt]</label></div>"

async function viewList() {
  checkList("list")
  list = localStorage.getItem("list");

  var listDiv = document.getElementById("list-content");
  listDiv.innerHTML = list;
  await openModal('listModal')
}

function addToGroceryList() {
  var ingredients = document.getElementById("ingredientsText").innerText.split('\n');
  console.log(ingredients)
  checkList("list")
  var currList = localStorage.getItem("list")
  for (i = 0; i < ingredients.length; i++) {
    if (ingredients[i].length > 2) {
      var divID = i + "_div";
      currList = currList + chkTemplate.replaceAll('[chk_id]', i + "").replaceAll('[chk_txt]', ingredients[i]).replaceAll('[div_id]', divID);
    }
  }
  localStorage.setItem("list", currList)
}

//Check the items off the list: move them to the bottom just in case you need to refer to them. 
function checkOff(id) {
  var chk = document.getElementById(id)
  var chkBox = document.getElementById(id.replace('_div', ''))
  var start = document.getElementById("list-content");
  chk.remove();
  if (chkBox.checked == false) {
    start.prepend(chk)
  }
  else {
    start.appendChild(chk)
  }
}

//This allows me to make sure that any localStorage item exists before trying to call it
function checkList(item) {
  console.log(localStorage.getItem("list").split('\n'))
  if (!(item in localStorage) || localStorage.getItem(item) === null) {
    localStorage.setItem(item, "")
  }
}

function clearList() {

}