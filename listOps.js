async function viewList() {
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