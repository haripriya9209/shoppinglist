//declaring variables
var addlist = document.getElementById("addlist");
var add = document.getElementById("add");
var li_item = document.getElementsByClassName("present");
var ul = document.getElementById("list");
var error = document.getElementById("error");
var del = document.getElementsByClassName("btn-del");

//adding items
function addlistitem(){
    var li = document.createElement("li");
    li.append(document.createTextNode(addlist.value));
    ul.append(li);
    addlist.value = "";
}

//adding items on click
add.addEventListener("click", function(){
    error.textContent ="";
    if(addlist.value.length>0)
    {
        addlistitem();
    }
    else{
        error.textContent = 'please enter item';
    }
    
})

//adding items on enter
addlist.addEventListener("keypress", function(event){
    error.textContent ="";
    if(addlist.value.length>0 && event.code==="Enter")
    {
        addlistitem();
    }
})

//deleting item
for(let i=0; i<del.length; i++){
    del[i].addEventListener("click", function(){
        console.log(i);
        li_item[i].classList.add("add-item");
    })
}
