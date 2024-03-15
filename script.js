const inputB =document.getElementById("box");
const list= document.getElementById("list-container");
function addtasks(){
    if(inputB.value == ''){
        alert("please write your task");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputB.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);      
    }
    inputB="";
}
list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();

    }
},false);