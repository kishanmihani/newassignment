// import data from './data.json'
class Index{
constructor(){
   this.data=[];

//    console.log(this.data)
   this.fetchdata=this.fetchdata.bind(this)
   this.tabledatashow=this.tabledatashow.bind(this)
   this.fetchdata(this.data) 
}

fetchdata(arraydata){
    fetch('./src-code/data.json')
    .then((response) => response.json())
    .then((json) =>{  arraydata.push(json["animal-data"]); this.tabledatashow(arraydata)})
    .catch(err => console.log("fetch data ",err))
}
tabledatashow(arraydata){
   
     
    try{
      let category=[];
      let uniquecategory; 
      let tableBody= document.querySelector('.animal-tbody')
      let selecttag= document.querySelector('#category')
    if (!tableBody) {
        console.error("Table body not found. Ensure your table has a <tbody> tag.");
        return;
    }
tableBody.innerHTML = "";
 arraydata[0].forEach((data) => {
  category.push(data.Species)
    let row = tableBody.insertRow();

        let td1 = row.insertCell(0);
        let td2 = row.insertCell(1);
        let td3 = row.insertCell(2);
        let td4 = row.insertCell(3);
        let td5 = row.insertCell(4);

        td1.setAttribute("style","font-weight: bolder;")
        td1.textContent = data.id;
        td2.textContent = data.Name;
        td3.textContent = data.Size;
        td4.textContent = data.Location;
        td5.textContent = data.Species;
 })
 uniquecategory = new Set(category);
 
 uniquecategory.forEach((data) => {
  let createopt=document.createElement('option')
  createopt.setAttribute('value',data)
  createopt.textContent=data
  selecttag.appendChild(createopt)
  
  })
}
 catch(err){
    console.log(err)}
}

myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myFunction");
    filter = input.value.toUpperCase();
    table = document.getElementById("animal-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
}

const NewIndex=new Index();
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("category");
    filter = input.value.toUpperCase();
    table = document.getElementById("animal-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }