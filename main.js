// Code to disable autocomplete as it breaks styling effects on Name row.
$('input').attr('autocomplete','off');

// Initialize global arrays to store input values by column to localStorage.
let colOneArr = new Array(20).fill('');
let colTwoArr = new Array(20).fill('');
let colThreeArr = new Array(20).fill('');
let colFourArr = new Array(20).fill('');
let colFiveArr = new Array(20).fill('');
let colSixArr = new Array(20).fill('');

// Checks if localStorage has saved values, populates if so.
window.onload = function() {
    getSavedValues();
}

// Runs onkeyup.
// Parameters: colNum - the player's column number.
//             colRow - the row number for easy storage.
//             id - the input's HTML id.
// Calls functions to sum column score and save input value in localStorage.
function valInput(colNum, colRow, id) {
    if (colRow != 0) {
        sumTotal(colNum);
    }
    saveValue(colNum, colRow, id);
}

// Calculates player's score in realtime for column and displays it to
// player's 'Total' cell at bottom of scorecard.
// Parameters: colNum - the player's column number.
// Calls function to save score in localStorage.
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
    for (let i = 0; i < 19; i++) {
        try {
            if (!isNaN(parseInt(holeScore[i].value))) {
                columnTotal += parseInt(holeScore[i].value);
            }
        }
        catch(e) {

        }
    }
    document.getElementById(resultNum).value = columnTotal;
    saveValue(colNum, 19, resultNum);
}

// Saves input value in related array then saves array as JSON obj in localStorage.
// Parameters: colNum - the player's column number.
//             colRow - the row number for easy storage.
//             id - the input's HTML id.
function saveValue(colNum, colRow, id) {
    if (colNum === 1) {
        colOneArr[colRow] = document.getElementById(id).value;
        localStorage.setItem('colOne', JSON.stringify(colOneArr));
    }
    else if (colNum === 2) {
        colTwoArr[colRow] = document.getElementById(id).value;
        localStorage.setItem('colTwo', JSON.stringify(colTwoArr));
    }
    else if (colNum === 3) {
        colThreeArr[colRow] = document.getElementById(id).value;
        localStorage.setItem('colThree', JSON.stringify(colThreeArr));
    }
    else if (colNum === 4) {
        colFourArr[colRow] = document.getElementById(id).value;
        localStorage.setItem('colFour', JSON.stringify(colFourArr));
    }
    else if (colNum === 5) {
        colFiveArr[colRow] = document.getElementById(id).value;
        localStorage.setItem('colFive', JSON.stringify(colFiveArr));
    }
    else {
        colSixArr[colRow] = document.getElementById(id).value;
        localStorage.setItem('colSix', JSON.stringify(colSixArr));
    }
}

// Gets saved values from localStorage. Saves previous values from
// localStorage into working global arrays.
// Parameters: none.
function getSavedValues() {
    if (localStorage.getItem('colOne') !== null) {
        const storedValuesOne = JSON.parse(localStorage.getItem('colOne'));
        itSavedValues(storedValuesOne, 'score-one');
        colOneArr = storedValuesOne;
    }
    if (localStorage.getItem('colTwo') !== null) {
        const storedValuesTwo = JSON.parse(localStorage.getItem('colTwo'));
        itSavedValues(storedValuesTwo, 'score-two');
        colTwoArr = storedValuesTwo;
    }
    if (localStorage.getItem('colThree') !== null) {
        const storedValuesThree = JSON.parse(localStorage.getItem('colThree'));
        itSavedValues(storedValuesThree, 'score-three');
        colThreeArr = storedValuesThree;
    }
    if (localStorage.getItem('colFour') !== null) {
        const storedValuesFour = JSON.parse(localStorage.getItem('colFour'));
        itSavedValues(storedValuesFour, 'score-four');
        colFourArr = storedValuesFour;
    }
    if (localStorage.getItem('colFive') !== null) {
        const storedValuesFive = JSON.parse(localStorage.getItem('colFive'));
        itSavedValues(storedValuesFive, 'score-five');
        colFiveArr = storedValuesFive;
    }
    if (localStorage.getItem('colSix') !== null) {
        const storedValuesSix = JSON.parse(localStorage.getItem('colSix'));
        itSavedValues(storedValuesSix, 'score-six');
        colSixArr = storedValuesSix;
    }
}

// Populates scorecard with saved values.
// Parameters: arr - the retrieved array from localStorage.
//             col - the column related class name.
function itSavedValues(arr, col) {
    const colArr = document.getElementsByClassName(col);
    for (let i = 0; i < 20; i++) {
        if (arr[i] !== '') {
            colArr[i].value = arr[i];
        }
    }
}

// Clears localStorage and reloads page.
function fakeConfirm(message, callback) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const confirmText = document.createElement('p');
    confirmText.textContent = message;

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'OK';
    confirmButton.addEventListener('click', function () {
        document.body.removeChild(modal);
        callback(true);
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'CANCEL';
    cancelButton.addEventListener('click', function () {
        document.body.removeChild(modal);
        callback(false);
    });

    modalContent.appendChild(confirmText);
    modalContent.appendChild(confirmButton);
    modalContent.appendChild(cancelButton);
    modal.appendChild(modalOverlay);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

function deleteScores() {
    fakeConfirm('Are you sure you want to delete all scores?', function (confirmDelete) {
        if (confirmDelete) {
            localStorage.clear();
            location.reload();
        }
    });
}