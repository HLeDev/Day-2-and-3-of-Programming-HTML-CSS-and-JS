document.addEventListener('DOMContentLoaded', function (event){
    document.getElementById('newHobbybtn').addEventListener('click', addHobbies);
});

function addHobbies() {
    const inputlst = document.querySelectorAll('.hobbiesInput');

    if (inputlst.length < 5) {
        const hobbieslist = document.getElementById('hobbieslst');

        const newLineElement = createNode('br');

        const inputElement = createNode('input');

        inputElement.setAttribute("class", "hobbiesInput");

        append(hobbieslist, newLineElement);

        append(hobbieslist, inputElement);
    }
    else {
        document.getElementById('newHobbybtn').removeEventListener('click', addHobbies);
    }
}
function createNode(element) {
    return document.createElement(element);

}

function append(parent, el) {
    return parent.appendChild(el);
}

function dispHobbies() {
    const inputlst = document.querySelectorAll('.hobbiesInput')

    for (var hob of inputlst) {
        document.getElementById("hobresult").innerHTML += hob.value + "<br/>";
    }
}

