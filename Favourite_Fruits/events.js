var fruitlist = document.getElementById("fruitList");

var listItems = fruitlist.querySelectorAll("li");
var inputs = fruitlist.querySelectorAll("input");

for(var i=0; i< listItems.length; i++){
    listItems[i].addEventListener("click", editFruit);
    inputs[i].addEventListener("blur", updateFruit);
    inputs[i].addEventListener("keypress",itemKeypress);
}

function editFruit(){
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateFruit(){
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemKeypress(event){
    if(event.which === 13)
        updateFruit.call(this);
}