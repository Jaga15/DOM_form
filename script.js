//Start of the document
//Grand parent division
let gpDiv=document.createElement("div");
gpDiv.setAttribute("id","gp");
gpDiv.setAttribute("class","container-fluid");

//Header division 
let headerDiv=document.createElement("div");
headerDiv.setAttribute("id","head");
headerDiv.setAttribute("class","bg-success p-4 container-fluid text-center");
headerDiv.innerHTML=`Forms`;

//Bosy division
let bodyDiv=document.createElement("div");
bodyDiv.setAttribute("id","body");
bodyDiv.setAttribute("class","d-flex flex-row container-fluid");

//Spliting up into two boxes
let box1=document.createElement("div");
box1.setAttribute("id","b1");
box1.setAttribute("class","container-fluid");

let box2=document.createElement("div");
box2.setAttribute("id","b2");
box2.setAttribute("class","container-fluid");

//Form creation
let form=document.createElement("form");
form.setAttribute("id","form");
form.setAttribute("class","form-control");

let brk1=document.createElement("br");
let brk2=document.createElement("br");
let brk3=document.createElement("br");

//Tags creation
let fname=document.createElement("div");
fname.innerHTML=`Enter First name :  `;
fname.setAttribute("id","content");

let finput=document.createElement("input");
finput.setAttribute("type","text");
finput.setAttribute("id","fname")


let lname=document.createElement("div");
lname.innerHTML=`Enter Last name :  `;
lname.setAttribute("id","content");

let linput=document.createElement("input");
linput.setAttribute("type","text");
linput.setAttribute("id","lname")


let address=document.createElement("div");
address.innerHTML=`Enter Address :  `;
address.setAttribute("id","content");

let ainput=document.createElement("input");
ainput.setAttribute("type","text");
ainput.setAttribute("id","address")


let pin=document.createElement("div");
pin.innerHTML=`Enter Pincode :  `;
pin.setAttribute("id","content");

let pinput=document.createElement("input");
pinput.setAttribute("type","text");
pinput.setAttribute("id","pincode")

//Radio button for gender
let gender=document.createElement("div");
gender.innerHTML=`Select Gender :  `;
gender.setAttribute("id","gender");


let ginput=document.createElement("input");
ginput.setAttribute("type","radio");
ginput.setAttribute("class","form-check-input");
ginput.setAttribute("name","gender");

let glabel=document.createElement("label");
glabel.setAttribute("class","form-check-label");
glabel.innerHTML=`Male`;
ginput.value="Male";


let ginput1=document.createElement("input");
ginput1.setAttribute("type","radio");
ginput1.setAttribute("class","form-check-input");
ginput1.setAttribute("name","gender");

let glabel1=document.createElement("label");
glabel1.setAttribute("class","form-check-label");
glabel1.innerHTML=`Female`;
ginput1.value="Female";

gender.appendChild(ginput);
gender.appendChild(glabel);
gender.appendChild(ginput1);
gender.appendChild(glabel1);

//Check box for food items
let food=document.createElement("div");
food.setAttribute("class","input-group text-justify");
food.innerHTML=`Select Food : `;
food.setAttribute("id","food")
food.setAttribute("name","food")

let item1=document.createElement("input");
item1.setAttribute("type","checkbox");
item1.setAttribute("class","form-check-input");
item1.setAttribute("name","item");
item1.setAttribute("id","check1");

let itm1=document.createElement("label");
itm1.setAttribute("class","form-check-label");
itm1.innerHTML=`Lasagni`;
item1.value=`Lasagni`;
item1.setAttribute("onclick","validateSelection()");

let item2=document.createElement("input");
item2.setAttribute("type","checkbox");
item2.setAttribute("class","form-check-input");
item2.setAttribute("name","item");
item2.setAttribute("id","check2");

let itm2=document.createElement("label");
itm2.setAttribute("class","form-check-label");
itm2.innerHTML=`Pizza`;
item2.value=`Pizza`;
item2.setAttribute("onclick","validateSelection()");

let item3=document.createElement("input");
item3.setAttribute("type","checkbox");
item3.setAttribute("class","form-check-input");
item3.setAttribute("name","item");
item3.setAttribute("id","check3");

let itm3=document.createElement("label");
itm3.setAttribute("class","form-check-label");
itm3.innerHTML=`Ravioli`;
item3.value=`Ravioli`;
item3.setAttribute("onclick","validateSelection()");

let item4=document.createElement("input");
item4.setAttribute("type","checkbox");
item4.setAttribute("class","form-check-input");
item4.setAttribute("name","item");
item4.setAttribute("id","check4");

let itm4=document.createElement("label");
itm4.setAttribute("class","form-check-label");
itm4.innerHTML=`Gnocchi`;
item4.value=`Gnocchi`;
item4.setAttribute("onclick","validateSelection()");

let item5=document.createElement("input");
item5.setAttribute("type","checkbox");
item5.setAttribute("class","form-check-input");
item5.setAttribute("name","item");
item5.setAttribute("id","check5");

let itm5=document.createElement("label");
itm5.setAttribute("class","form-check-label");
itm5.innerHTML=`Minestrone`;
item5.value=`Minestrone`;
item5.setAttribute("onclick","validateSelection()");

let state=document.createElement("div");
state.innerHTML=`Enter State :  `;
state.setAttribute("id","content");

let sinput=document.createElement("input");
sinput.setAttribute("type","text");
sinput.setAttribute("id","state")


let country=document.createElement("div");
country.innerHTML=`Enter Country :  `;
country.setAttribute("id","content");

let cinput=document.createElement("input");
cinput.setAttribute("type","text");
cinput.setAttribute("id","country")

//Submit button
let btn=document.createElement("button");
btn.setAttribute("type","button");
btn.setAttribute("id","btn");
btn.setAttribute("class","btn btn-primary btn-group-lg btn-block");
btn.innerHTML="Submit";
btn.setAttribute("onclick","displayer()");

//Appending all the child elements
food.appendChild(brk3);
food.appendChild(item1);
food.appendChild(itm1);
food.appendChild(item2);
food.appendChild(itm2);
food.appendChild(item3);
food.appendChild(itm3);
food.appendChild(item4);
food.appendChild(itm4);
food.appendChild(item5);
food.appendChild(itm5);


form.appendChild(fname);
form.appendChild(finput);

form.appendChild(lname);
form.appendChild(linput);

form.appendChild(address);
form.appendChild(ainput);

form.appendChild(pin);
form.appendChild(pinput);

form.appendChild(gender);

form.appendChild(food);

form.appendChild(state);
form.appendChild(sinput);

form.appendChild(country);
form.appendChild(cinput);

form.appendChild(brk1);
form.appendChild(brk2);
form.appendChild(btn);

box1.appendChild(form);

//Table creation
let table=document.createElement("table");
table.setAttribute("id","table");
table.setAttribute("class","table table stripped");

//Table header part
let thead=document.createElement("thead");
thead.setAttribute("id","thead");


let tr=document.createElement("tr");

//Head data
let td1=document.createElement("td");
let td2=document.createElement("td");
let td3=document.createElement("td");
let td4=document.createElement("td");
let td5=document.createElement("td");
let td6=document.createElement("td");
let td7=document.createElement("td");
let td8=document.createElement("td");

td1.innerHTML=`First name`;
td2.innerHTML=`Last name`;
td3.innerHTML=`Address`;
td4.innerHTML=`Pincode`;
td5.innerHTML=`Gender`;
td6.innerHTML=`Food`;
td7.innerHTML=`State`;
td8.innerHTML=`Country`;

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
tr.appendChild(td6);
tr.appendChild(td7);
tr.appendChild(td8);
thead.appendChild(tr);

//Table body
let tbody=document.createElement("tbody");
tbody.setAttribute("id","ttbody");


table.appendChild(thead);
table.appendChild(tbody);
box2.appendChild(table);

bodyDiv.appendChild(box1);
bodyDiv.appendChild(box2);

gpDiv.appendChild(headerDiv);
gpDiv.appendChild(bodyDiv);
//Final append to document body
document.body.appendChild(gpDiv);

//Function to display the content in the table
function displayer()
{
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let address=document.getElementById("address").value;
    let pincode=document.getElementById("pincode").value;
    let state=document.getElementById("state").value;
    let country=document.getElementById("country").value;

    var newRow = document.createElement("tr");
    var newCell1 = document.createElement("td");
    newCell1.innerHTML = fname;
    var newCell2 = document.createElement("td");
    newCell2.innerHTML = lname;
    var newCell3 = document.createElement("td");
    newCell3.innerHTML = address;
    var newCell4= document.createElement("td");
    newCell4.innerHTML = pincode;
    var newCell5= document.createElement("td");
    newCell5.innerHTML =radioCheck();
    var newCell6= document.createElement("td");
    newCell6.innerHTML =checkboxCheck();
    var newCell7 = document.createElement("td");
    newCell7.innerHTML = state;
    var newCell8 = document.createElement("td");
    newCell8.innerHTML = country;

    newRow.append(newCell1);
    newRow.append(newCell2);
    newRow.append(newCell3);
    newRow.append(newCell4);
    newRow.append(newCell5);
    newRow.append(newCell6);
    newRow.append(newCell7);
    newRow.append(newCell8);

    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("address").value = '';
    document.getElementById("pincode").value = '';
    document.getElementById("state").value = '';
    document.getElementById("country").value = '';

    document.getElementById("ttbody").appendChild(newRow);
    

}

//Function to check values of radio buttons
function radioCheck()
{
    var ele = document.getElementsByName('gender');
              
            for(i = 0; i < ele.length; i++) 
            {
                if(ele[i].checked)
                {
                    ele[i].checked = false;
                return ele[i].value;
                }
            }
            return "";
}

//Function to check values of check buttons
function checkboxCheck()
{
    var l1 = document.getElementById("check1");  
    var l2 = document.getElementById("check2");  
    var l3 = document.getElementById("check3");  
    var l4 = document.getElementById("check4");  
    var l5 = document.getElementById("check5");    
       
    var res=" ";   
    var c=1;
    if (l1.checked == true && c<=2){  
      var pl1 = document.getElementById("check1").value;  
      res = pl1 + "<br>";
      c++;   
    
    }   
    if (l2.checked == true && c<=2){  
      var pl2 = document.getElementById("check2").value;  
      res = res + pl2 + "<br>";   
      c++;  
     
    }  
    if (l3.checked == true && c<=2){   
      var pl3 = document.getElementById("check3").value;  
      res = res + pl3 + "<br>";   
      c++; 
      
    }  
    if (l4.checked == true && c<=2){  
      var pl4 = document.getElementById("check4").value;  
      res = res + pl4 + "<br>";  
      c++;   
      
    }  
    if (l5.checked == true && c<=2){  
      var pl5 = document.getElementById("check5").value;  
      res = res + pl5 + "<br>"; 
      c++; 
         
    } 
    l1.checked = false;
    l2.checked = false;
    l3.checked = false; 
    l4.checked = false;
    l5.checked = false;  
    return res; 
}

//Function to validate check button to select only two entries
function validateSelection()  
{  
    var checkboxes = document.getElementsByName("item");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems > 2)  
    {   
        return false;  
    }  
}  
//End of the document