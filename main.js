// Code to disable autocomplete as it breaks styling effects on Name row.
$('input').attr('autocomplete','off');

// Initialize global arrays to store input values by column to sessionStorage.
let colOneArr = new Array(17).fill('');
let colTwoArr = new Array(17).fill('');
let colThreeArr = new Array(17).fill('');
let colFourArr = new Array(17).fill('');
let colFiveArr = new Array(17).fill('');
let colSixArr = new Array(17).fill('');

// Checks if sessionStorage has saved values, populates if so.
window.onload = function() {
    getSavedValues();
}

// Runs onkeyup.
// Parameters: colNum - the player's column number.
//             colRow - the row number for easy storage.
//             id - the input's HTML id.
// Calls functions to sum column score and save input value in sessionStorage.
function valInput(colNum, colRow, id) {
    if (colRow != 0) {
        sumTotal(colNum);
    }
    saveValue(colNum, colRow, id);
}

// Calculates player's score in realtime for column and displays it to
// player's 'Total' cell at bottom of scorecard.
// Parameters: colNum - the player's column number.
// Calls function to save score in sessionStorage.
function sumTotal(colNum) {
    let scoreNum;
    let resultNum;

    if (colNum === 1) {
        scoreNum = 'score-one';
        resultNum = 'result-one';
    }
    else if (colNum === 2) {
        scoreNum = 'score-two';
        resultNum = 'result-two';
    }
    else if (colNum === 3) {
        scoreNum = 'score-three';
        resultNum = 'result-three';
    }
    else if (colNum === 4) {
        scoreNum = 'score-four';
        resultNum = 'result-four';
    }
    else if (colNum === 5) {
        scoreNum = 'score-five';
        resultNum = 'result-five';
    }
    else {
        scoreNum = 'score-six';
        resultNum = 'result-six';
    }

    const holeScore = document.getElementsByClassName(scoreNum);
    let columnTotal = 0;
    for (let i = 0; i < 16; i++) {
        try {
            if (!isNaN(parseInt(holeScore[i].value))) {
                columnTotal += parseInt(holeScore[i].value);
            }
        }
        catch(e) {

        }
    }
    document.getElementById(resultNum).value = columnTotal;
    saveValue(colNum, 16, resultNum);
}

// Saves input value in related array then saves array as JSON obj in sessionStorage.
// Parameters: colNum - the player's column number.
//             colRow - the row number for easy storage.
//             id - the input's HTML id.
function saveValue(colNum, colRow, id) {
    if (colNum === 1) {
        colOneArr[colRow] = document.getElementById(id).value;
        sessionStorage.setItem('colOne', JSON.stringify(colOneArr));
    }
    else if (colNum === 2) {
        colTwoArr[colRow] = document.getElementById(id).value;
        sessionStorage.setItem('colTwo', JSON.stringify(colTwoArr));
    }
    else if (colNum === 3) {
        colThreeArr[colRow] = document.getElementById(id).value;
        sessionStorage.setItem('colThree', JSON.stringify(colThreeArr));
    }
    else if (colNum === 4) {
        colFourArr[colRow] = document.getElementById(id).value;
        sessionStorage.setItem('colFour', JSON.stringify(colFourArr));
    }
    else if (colNum === 5) {
        colFiveArr[colRow] = document.getElementById(id).value;
        sessionStorage.setItem('colFive', JSON.stringify(colFiveArr));
    }
    else {
        colSixArr[colRow] = document.getElementById(id).value;
        sessionStorage.setItem('colSix', JSON.stringify(colSixArr));
    }
}

// Gets saved values from sessionStorage. Saves previous values from
// sessionStorage into working global arrays.
// Parameters: none.
function getSavedValues() {
    if (sessionStorage.getItem('colOne') !== null) {
        const storedValuesOne = JSON.parse(sessionStorage.getItem('colOne'));
        itSavedValues(storedValuesOne, 'score-one');
        colOneArr = storedValuesOne;
    }
    if (sessionStorage.getItem('colTwo') !== null) {
        const storedValuesTwo = JSON.parse(sessionStorage.getItem('colTwo'));
        itSavedValues(storedValuesTwo, 'score-two');
        colTwoArr = storedValuesTwo;
    }
    if (sessionStorage.getItem('colThree') !== null) {
        const storedValuesThree = JSON.parse(sessionStorage.getItem('colThree'));
        itSavedValues(storedValuesThree, 'score-three');
        colThreeArr = storedValuesThree;
    }
    if (sessionStorage.getItem('colFour') !== null) {
        const storedValuesFour = JSON.parse(sessionStorage.getItem('colFour'));
        itSavedValues(storedValuesFour, 'score-four');
        colFourArr = storedValuesFour;
    }
    if (sessionStorage.getItem('colFive') !== null) {
        const storedValuesFive = JSON.parse(sessionStorage.getItem('colFive'));
        itSavedValues(storedValuesFive, 'score-five');
        colFiveArr = storedValuesFive;
    }
    if (sessionStorage.getItem('colSix') !== null) {
        const storedValuesSix = JSON.parse(sessionStorage.getItem('colSix'));
        itSavedValues(storedValuesSix, 'score-six');
        colSixArr = storedValuesSix;
    }
}

// Populates scorecard with saved values.
// Parameters: arr - the retrieved array from sessionStorage.
//             col - the column related class name.
function itSavedValues(arr, col) {
    const colArr = document.getElementsByClassName(col);
    for (let i = 0; i < 17; i++) {
        if (arr[i] !== '') {
            colArr[i].value = arr[i];
        }
    }
}