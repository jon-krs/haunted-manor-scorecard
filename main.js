// Code to disable autocomplete as it breaks styling effects on Name row.
$('input').attr('autocomplete','off');

// 6 functions below to sum player scores in realtime for all columns. 
// Result sum is displayed in 'Total' row. 
// Try/catch blocks are to allow summation despite empty values on some holes.
function sumColumnOne() {
    const holeScore = document.getElementsByClassName("score-one");
    var columnTotal = 0;
    for (var i = 0; i < 16; i++) {
        try {
            if (!isNaN(parseInt(holeScore[i].value))) {
                columnTotal += parseInt(holeScore[i].value);
            }
        }
        catch(e) {

        }
    }
    document.getElementById("result-one").value = columnTotal;
}

function sumColumnTwo() {
    const holeScore = document.getElementsByClassName("score-two");
    var columnTotal = 0;
    for (var i = 0; i < 16; i++) {
        try {
            if (!isNaN(parseInt(holeScore[i].value))) {
                columnTotal += parseInt(holeScore[i].value);
            }
        }
        catch(e) {

        }
    }
    document.getElementById("result-two").value = columnTotal;
}

function sumColumnThree() {
    const holeScore = document.getElementsByClassName("score-three");
    var columnTotal = 0;
    for (var i = 0; i < 16; i++) {
        try {
            if (!isNaN(parseInt(holeScore[i].value))) {
                columnTotal += parseInt(holeScore[i].value);
            }
        }
        catch(e) {

        }
    }
    document.getElementById("result-three").value = columnTotal;
}

function sumColumnFour() {
    const holeScore = document.getElementsByClassName("score-four");
    var columnTotal = 0;
    for (var i = 0; i < 16; i++) {
        try {
            if (!isNaN(parseInt(holeScore[i].value))) {
                columnTotal += parseInt(holeScore[i].value);
            }
        }
        catch(e) {

        }
    }
    document.getElementById("result-four").value = columnTotal;
}

function sumColumnFive() {
    const holeScore = document.getElementsByClassName("score-five");
    var columnTotal = 0;
    for (var i = 0; i < 16; i++) {
        try {
            if (!isNaN(parseInt(holeScore[i].value))) {
                columnTotal += parseInt(holeScore[i].value);
            }
        }
        catch(e) {

        }
    }
    document.getElementById("result-five").value = columnTotal;
}

function sumColumnSix() {
    const holeScore = document.getElementsByClassName("score-six");
    var columnTotal = 0;
    for (var i = 0; i < 16; i++) {
        try {
            if (!isNaN(parseInt(holeScore[i].value))) {
                columnTotal += parseInt(holeScore[i].value);
            }
        }
        catch(e) {

        }
    }
    document.getElementById("result-six").value = columnTotal;
}