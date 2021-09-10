const gArray = [];

function AddGame() {
    var gInput = document.getElementById("game").value;

    gArray.push(gInput);

    var gVal = "";

    for (var i of gArray) {
        gVal = gVal + i + "," + "<br/>";
        console.log(gVal);
    }
    
    document.getElementById('para').innerHTML = gVal;

    document.getElementById("game").value = "";
}

