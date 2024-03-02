const chkTemplate = "<div id=\"[div_id]\"><input type=\"checkbox\" id=\"[chk_id]\" onclick=\"checkOff('[div_id]')\"><label for=\"[chk_id]\">[chk_txt]</label></div>"

async function viewList() {
  checkList("list")
  listArr = localStorage.getItem("list").split('\n');

  var listDiv = document.getElementById("list-content");
  listDiv.innerHTML = "";
  for (i = 0; i < listArr.length; i++) {
    if (listArr[i].length > 2) {
      var divID = i + "_div";
      listDiv.innerHTML = listDiv.innerHTML + chkTemplate.replaceAll('[chk_id]', i + "").replaceAll('[chk_txt]', listArr[i]).replaceAll('[div_id]', divID);
    }
  }
  await openModal('listModal')
}

function addToGroceryList() {
  var ingredients = document.getElementById("ingredientsText");
  checkList("list")
  var currList = localStorage.getItem("list")
  localStorage.setItem("list", currList + '\n' + ingredients)
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
