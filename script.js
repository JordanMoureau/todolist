let addToDoButton = document.getElementById('addToDo');
let longTermList = document.getElementById('longTermContainer');
let inputField = document.getElementById('inputField');

//variables for today todo list

let todayList = document.getElementById('todayContainer');
let todayInput = document.getElementById('inputFieldToday')
let todayAdd = document.getElementById('todayAdd')

//variables for this week todo list

let weekList = document.getElementById('weekContainer');
let weekInput = document.getElementById('inputFieldWeek')
let weekAdd = document.getElementById('weekAdd')

addToDoButton.addEventListener('click', function() {
   
    createAddListItem("label", "todo-container", longTermList, inputField);

})

todayAdd.addEventListener('click', function() {
   
    createAddListItem("label", "todo-container-today", todayList, todayInput);

})

weekAdd.addEventListener('click', function() {
   
    createAddListItem("label", "todo-container-today", weekList, weekInput);

})



function createAddListItem(elementType, elementClass, parent, input) {
    let newElement = createElementWrapper(elementType, elementClass, parent);
    console.log(newElement);
    newListItem(newElement, input, parent);
}

addEnter(inputField, addToDoButton);
addEnter(todayInput, todayAdd);
addEnter(weekInput, weekAdd);


function newListItem(parent, input, parentsParent) {
    var newCheckBox = document.createElement("input");

    newCheckBox.type = "checkbox";
    parent.appendChild(newCheckBox);

    var newSpan = document.createElement("span");
    newSpan.classList.add("checkmark");
    parent.appendChild(newSpan);
    
    var paragraph = document.createElement('p');

    paragraph.innerText = input.value;
    if (paragraph.innerText === "") {
        paragraph.innerText = "Tha's a nothing. Double click to delete me.";
    }
    
    parent.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('dblclick', function(){
        parent.removeChild(paragraph);
        parent.removeChild(newCheckBox);
        parent.removeChild(newSpan);
        parentsParent.removeChild(parent);
    })
}

function createElementWrapper(elementType, elementClass, parent) {
    var newElement = document.createElement(elementType);

    newElement.classList.add(elementClass);
    parent.appendChild(newElement);

    return newElement;
}


function addEnter(input, buttonId) {

    input.addEventListener('keypress', function(event) {
        if (event.key === "Enter"){
            event.preventDefault();
            buttonId.click();
        }
    });
}