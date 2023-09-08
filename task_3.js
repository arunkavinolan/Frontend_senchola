 
 function todo(){ 
    taskValue = document.getElementById("task").value; //task
    console.log(taskValue)
            ol = document.getElementById("list"); //ol get
   
            //checkbox
   if (taskValue == ""){
      alert("Please insert your to-Do task");
   }
   else{ 
       //create listItem 
     li = document.createElement("li");
     li.innerHTML = taskValue;
     ol.appendChild(li); 
     //create check box 
     // const createCheckbox = document.createElement("input");
     // createCheckbox.type = "checkbox";
     // createCheckbox.id   = "checkbox";
     // //createCheckbox.innerHTML =' <input type="checkbox" id="checkbox" onclick=alertIfChecked(this.parentNode,this.id)> '
     // li.appendChild(createCheckbox); 
    // document.getElementsByName("checkbox").addEventListener("click", alertIfChecked);
     // create Delete Button 
      const createButton = document.createElement("span");
      createButton.innerHTML ='<button onclick=deleteTask(this.parentNode)  class="delete"> Delete</buton>' ;
     // createButton.name = "delete";
            //buttonDiv = document.getElementById("delBtn")
      li.appendChild(createButton);
    //  document.getElementsByName("delete").addEventListener("click", deleteTask);
     // li.appendChild(createButton);
     //checkbox.onclick=check();
//                 checkbox.addEventListener("click", function() {
//   alert("The checkbox has been clicked!");
// });           
 //    checkbox.addEventListener("click", function() {
 //                 if (che)alert("The checkbox has been clicked!");
 //     }) ; 

//       function click(){
//       alert("I am clicked");
//    }
}      
   //checkbox.onClick=check(); 
}  
//alert("hello")
// if (document.getElementById("checkbox")){  
//       alert("hello")
//     if ( document.getElementById("checkbox").checked === true) { 
//      alert("hello") ;
//    }
//     //document.getElementById("checkbox").onclick= check()
// }  




// function alertIfChecked(parent, id) {  
// // alert("hello")
//  console.log("parent:"+parent+id);
// let checkbox =  document.getElementById(id);
// // let li_element= checkbox.parentNode ;
// if ( checkbox.checked) {
//    alert("The checkbox is checked!");
//      //let li_element= checkbox.parentNode ;
//      parent.style.color = "green";
// } else { 
//  parent.style.color = "black";
//     // Do nothing.
//     //alert("I am not checked")
// }
// };

function deleteTask(parentli){ 
  realparent =  parentli.parentNode;
  alert("parentli"+realparent);
  realparent.remove();
}