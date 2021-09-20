var addlist = document.getElementById("addlist");
var add = document.getElementById("add");
var ul = document.getElementById("list");
var error = document.getElementById("error");

function addlistitem(){
    var li = document.createElement("li");
    li.append(document.createTextNode(addlist.value));
    ul.append(li);
    addlist.value = "";
}


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

addlist.addEventListener("keypress", function(event){
    error.textContent ="";
    if(addlist.value.length>0 && event.code==="Enter")
    {
        addlistitem();
    }
})