let listContent = document.querySelector("ul");
document.querySelector("#add-todo-btn").addEventListener("click",addTask);
let value=[];

function addTask(){
  //get value inputted
  let getValue = document.querySelector("input").value;
  
  let fieldValue = {'task' : getValue};
  value.push(fieldValue);
  //store values in local storage
  let storage = localStorage.setItem('fieldValue',JSON.stringify(value));
  
  //get content on local storage and display on console
  const newContent = localStorage.getItem("fieldValue");
  console.log('newContent:', JSON.parse(newContent));
  
  //define the elements
  let section = document.createElement("section");
  let button = document.createElement("input");
  button.setAttribute("type","checkbox");
  let div = document.createElement("div");
  let text = document.createElement("input");
  text.setAttribute("type","text");
  text.setAttribute("id","id");
  let span = document.createElement("SPAN");
  let li = document.createElement("li");
  let containerDiv = document.createElement("div");
  let penIcon = document.createElement("button");
  let edit_i = document.createElement("i");
  let confirmIcon = document.createElement("button");
  let confirm_i = document.createElement("i");
  let deleteIcon = document.createElement("button");
  let idel = document.createElement("i");
  
  //add class list to defined elements
  section.classList.add("todo");
  div.classList.add("todo-text-container");
  text.classList.add("todo-text");
  button.classList.add("check-todo-btn");
  containerDiv.classList.add("btn-container");
  deleteIcon.classList.add("delete-todo-btn");
  idel.classList.add("fa-lg","fa-trash","fal","del");
  penIcon.classList.add("edit-todo-btn");
  edit_i.classList.add("fal", "fa-pen-square","fa-lg","edit");
  confirmIcon.classList.add("confirm-edit-btn");
  confirm_i.classList.add("fal","fa-check-circle","fa-lg","confirm");
  
  confirmIcon.style.display="none";
  text.value = getValue;
  // text.disabled = true;
  
  
  let get = document.getElementsByClassName("del");
  let confirm = document.getElementsByClassName("confirm");
  let edit = document.getElementsByClassName("edit");
  const input = document.getElementById("id");
  
  
  
  //editing for loop
  for (let i = 0; i < edit.length; i++) {
    //edit function
    edit[i].onclick = function() {
      // const text = document.querySelector(".todo-text");
      // let value = document.getElementsByClassName("todo-text")[i].value;
 
      document.getElementsByClassName("edit-todo-btn")[i].style.display = "none";
      document.getElementsByClassName("confirm-edit-btn")[i].style.display = "flex";
      // document.querySelector(".todo-text");
      
      input.focus();
      input.select();
      input.disabled = false;  
    }
  }
  
  //confirmation loop
  for (let i = 0; i < confirm.length; i++) {
    //confirm function
    confirm[i].onclick = function(){
      document.getElementsByClassName("edit-todo-btn")[i].style.display = "flex";
      document.getElementsByClassName("confirm-edit-btn")[i].style.display = "none";
      input.disabled = true;
      let existing = localStorage.getItem(fieldValue);
      let new_value = document.getElementsByClassName("todo-text")[i].value;
      
      existing = existing ? JSON.parse(existing) : {};
      existing['new_task'] = new_value;
      
      localStorage.setItem('fieldValue',JSON.stringify(existing));
      const newContent = localStorage.getItem("fieldValue");
      console.log('newContent:', JSON.parse(newContent));
    }    
  }
  
  
  //delete for loop
  for (let i = 0; i < get.length; i++) {
    //delete function
    get[i].onclick = function() {
      let div = document.getElementsByClassName("todo");
      let input_value = document.getElementsByClassName("todo-text")[i].value;
 
      localStorage.removeItem(input_value);
      console.log(value);
      div[i].style.display = "none";
    }
  }
  
  listContent.append(section);
  section.append(button);
  section.append(div);
  div.append(li);
  section.append(containerDiv);
  span.appendChild(text);
  li.appendChild(span);
  
  containerDiv.append(deleteIcon);
  deleteIcon.append(idel);
  
  containerDiv.append(confirmIcon);
  confirmIcon.append(confirm_i);
  
  containerDiv.append(penIcon);
  penIcon.append(edit_i);
  
 
}


// function deleteItem(){
//   let value = document.getElementsByClassName("todo-text")[0].value;
//   let range = document.getElementsByClassName("todo");
//   localStorage.removeItem(value);
//   console.log(value);
//   for(let i = 0; i<=range.length; i++){
//     range[i].onclick = function() {
//       let par = this.parentElement;
//       par.display = "none";
//     }
//   }
// }
