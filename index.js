function getAndUpdate() {
  console.log("Updating List...............");
  tit = document.getElementById("title").value;
  descp = document.getElementById("description").value;
  if (localStorage.getItem("itemsJson") == null) {
    itemArray = [];
    itemArray.push([tit, descp]);
    localStorage.setItem("itemsJson", JSON.stringify(itemArray));
  } else {
    itemArraystr = localStorage.getItem("itemsJson");
    itemArray = JSON.parse(itemArraystr);
    itemArray.push([tit, descp]);
    localStorage.setItem("itemsJson", JSON.stringify(itemArray));
  }
  update()
}
function update() {
    if (localStorage.getItem("itemsJson") == null) {
        itemArray = [];
        localStorage.setItem("itemsJson", JSON.stringify(itemArray));
      } 
      else {
        itemArraystr = localStorage.getItem("itemsJson");
        itemArray = JSON.parse(itemArraystr);
        
      }
  let tablebody = document.getElementById("tablebody");
  let str = "";
  itemArray.forEach((element, index) => {
    str += ` <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-danger"  style="font-family: 'Chakra Petch', sans-serif;"onclick="deleted(${index})">Delete</button></td>
                
                     </tr>`;
  });
  tablebody.innerHTML = str;
}
adds = document.getElementById("add");
adds.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
  console.log("delete", itemIndex);
  itemArraystr1 = localStorage.getItem("itemsJson");
  itemArray = JSON.parse(itemArraystr1);
  itemArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemArray));
  update();
}
function clearstorage(){
    if(confirm('Do you really want to Clear?')){
    console.log("Clearing storage")
    localStorage.clear()
    update()
    }

}
