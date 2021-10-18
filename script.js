//declaring variables
var addlist = document.getElementById("addlist");
var add = document.getElementById("add");
var li_item = document.getElementsByClassName("present");
var ul = document.getElementById("list");
var error = document.getElementById("error");
var del = document.getElementsByClassName("btn-del");
var item = 0;
var arr=[];
var del_all = document.getElementById("delAll");
var valueItem;
var flag = false;

//adding items
function addlistitem(){
    var li = document.createElement("li");
    var del_button = document.createElement("button");
    li.append(document.createTextNode(addlist.value+" "));
    li.classList.add("fontWeigth");
    // del_button.append(document.createTextNode("delete"));
    // del_button.classList.add("delAll");
    del_button.classList.add("fa");
    del_button.classList.add("fa-trash");
    ul.append(li);
    li.appendChild(del_button);
    arr.push(addlist.value);

    // Strike
    li.addEventListener("click", function(){
        li.classList.toggle("strike");
        flag = !flag;
    })
    //delete
    del_button.addEventListener("click", function(){
        // li.classList.add("add-item");

        var index = Array.prototype.indexOf.call(ul.children, li);
        ul.removeChild(li);
        localStorage.removeItem(index);
        // console.log(index);
        arr.splice(index,1);
        // console.log(arr);
        localStorage.clear();
        for(let i=0;i<arr.length;i++){
            localStorage.setItem(i, arr[i]);
        }
        
    })
    storage();
    addlist.value = "";
    
}

//adding items on click
add.addEventListener("click", function(){
    error.textContent ="";
    if(addlist.value.length>0)
    {
        addlistitem();
        item ++;
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
        item++;
    }
})

//deleting item
// for(let i=0; i<li_item.length; i++){
//     del[i].addEventListener("click", function(){
//         li_item[i].classList.add("add-item");
//     })
// }

//strike item
// for(let i=0; i< li_item.length; i++){
//     li_item[i].addEventListener("click", function(){
//         li_item[i].classList.toggle("strike");
//     })
    
// }

function storage(){
    for(let j=0;j<=item;j++){
        localStorage.setItem(item, addlist.value);
        // console.log(addlist.value);
    }
}

function load(){
    arr=[];
    for(let i=0;i<localStorage.length;i++)
    {
        var li = document.createElement("li");
        var del_button = document.createElement("button");
        valueItem = localStorage.getItem(i);
        // console.log(i, valueItem);
        li.append(document.createTextNode(valueItem +" "));
        li.classList.add("fontWeigth");
        // del_button.append(document.createTextNode("delete"));
        // del_button.classList.add("delAll");
        del_button.classList.add("fa");
        del_button.classList.add("fa-trash");
        ul.append(li);
        li.appendChild(del_button);
        arr.push(valueItem);
        // console.log(arr);
    }   

    //Strike
    // for (let j = 0; j < ul.childElementCount; j++) {

    //     ul.children[j].addEventListener("click", function(){
    //         ul.children[j].classList.toggle("strike");
    //     })
        
    // }
    

    //delete
    for(let i=0; i<ul.childElementCount; i++){
        ul.children[i].children[0].addEventListener("click", function(){
            ul.children[i].classList.add("add-item");
            arr.splice(i,1);
            setLocalStorage()
        })
    }
    function setLocalStorage(){
        localStorage.clear()
        for(let j=0; j<arr.length; j++)
            {
                localStorage.setItem(j, arr[j])
            }
    }
    
    item = localStorage.length;
}

del_all.addEventListener("click",function(){
    localStorage.clear();
    for(let i=0; i<ul.childElementCount; i++){
        ul.children[i].classList.add("add-item");
        arr.splice(i,1);
        // console.log(arr);
    }
})