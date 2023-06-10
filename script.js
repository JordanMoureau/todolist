let addToDoButton = document.getElementById('addToDo');
let longTermList = document.getElementById('longTermContainer');
let inputField = document.getElementById('inputField');
let todayList = document.getElementById('todayContainer');

addToDoButton.addEventListener('click', function() {
    var newLabel = document.createElement("label");

    newLabel.classList.add('todo-container');
    longTermList.appendChild(newLabel);

    
    var newCheckBox = document.createElement("input");

    newCheckBox.type = "checkbox";
    newLabel.appendChild(newCheckBox);

    var newSpan = document.createElement("span");
    newSpan.classList.add("checkmark");
    newLabel.appendChild(newSpan);
    
    var paragraph = document.createElement('p');

    paragraph.innerText = inputField.value;
    newLabel.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('dblclick', function(){
        newLabel.removeChild(paragraph);
        newLabel.removeChild(newCheckBox);
        newLabel.removeChild(newSpan);
        longTermList.removeChild(newLabel);
    })
    
})

var input = document.getElementById("inputField");

input.addEventListener('keypress', function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("addToDo").click();
    }
});



function appendChildClass(elementType, elementClass, parent) {
    let newElement = document.createElement(elementType);

    newElement.classList.add(elementClass);
    parent.appendChild(newElement);
}
