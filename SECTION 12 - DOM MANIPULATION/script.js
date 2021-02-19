var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    insertElement();
})

input.addEventListener("keypress", function(event){
    if (event.keyCode === 13){
        insertElement();
    }
})

function insertElement(){
    if (input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
}