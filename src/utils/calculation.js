export function horizontalWins(startPosition = 0, outPutArray) {
  const numberOfPossibleRows = 4;
  for (let i = 0; i < numberOfPossibleRows; i++) {
    const array = Array(5);

    for (let j = 0; j < array.length; j++) {
      array[j] = startPosition + j;
    }
    startPosition++;
    outPutArray.push(array);
  }
}

export function verticalWins(startPosition, outPutArray) {
  const numberOfPossibleRows = 4;
  for (let i = 0; i < numberOfPossibleRows; i++) {
    const array = Array(5);
    let runner = 0;
    for (let j = 0; j < array.length; j++) {
      array[j] = startPosition + runner;
      runner = runner + 8;
    }
    startPosition = startPosition + 8;
    outPutArray.push(array);
  }
}

export function diagRightTopLeft(startPosition = 0, outPutArray) {
  const numberOfPossibleRows = 4;
  for (let i = 0; i < numberOfPossibleRows; i++) {
    const array = Array(5);
    let runner = 0;
    for (let j = 0; j < array.length; j++) {
      array[j] = startPosition + runner;
      runner = runner + 9;
    }
    startPosition = startPosition + 8;
    outPutArray.push(array);
  }
}

export function diagLeftTopRight(startPosition = 0, outPutArray) {
  const numberOfPossibleRows = 4;
  for (let i = 0; i < numberOfPossibleRows; i++) {
    const array = Array(5);
    let runner = 0;
    for (let j = 0; j < array.length; j++) {
      array[j] = startPosition + runner;
      runner = runner + 7;
    }
    startPosition = startPosition + 8;
    outPutArray.push(array);
  }
}
// !KickOut Row
export function kickOutHorizontal(squares, i) {
  if (
    //  !just to right
    ((i >= 0 && i <= 4) ||
      (i >= 8 && i <= 12) ||
      (i >= 16 && i <= 20) ||
      (i >= 24 && i <= 28) ||
      (i >= 32 && i <= 36) ||
      (i >= 40 && i <= 44) ||
      (i >= 48 && i <= 52) ||
      (i >= 56 && i <= 60)) &&
    squares[i] !== squares[i + 1] &&
    squares[i] !== squares[i + 2] &&
    squares[i] === squares[i + 3] &&
    squares[i + 1] &&
    squares[i + 2]
  ) {
    squares[i + 1] = null;
    squares[i + 2] = null;
  }
  if (
    //  !just to left
    ((i >= 59 && i <= 63) ||
      (i >= 51 && i <= 55) ||
      (i >= 43 && i <= 47) ||
      (i >= 35 && i <= 39) ||
      (i >= 27 && i <= 31) ||
      (i >= 19 && i <= 23) ||
      (i >= 11 && i <= 15) ||
      (i >= 3 && i <= 7)) &&
    squares[i] !== squares[i - 1] &&
    squares[i] !== squares[i - 2] &&
    squares[i] === squares[i - 3] &&
    squares[i - 1] &&
    squares[i - 2]
  ) {
    squares[i - 1] = null;
    squares[i - 2] = null;
  }
}
export function kickOutVertical(squares, i) {
  if (
    //  !just to bottom
    i <= 39 &&
    squares[i] !== squares[i + 8] &&
    squares[i] !== squares[i + 16] &&
    squares[i] === squares[i + 24] &&
    squares[i + 8] &&
    squares[i + 16]
  ) {
    squares[i + 8] = null;
    squares[i + 16] = null;
  }
  if (
    //  !just to top
    i >= 24 &&
    squares[i] !== squares[i - 8] &&
    squares[i] !== squares[i - 16] &&
    squares[i] === squares[i - 24] &&
    squares[i - 8] &&
    squares[i - 16]
  ) {
    squares[i - 8] = null;
    squares[i - 16] = null;
  }
}

// export function kickOutDiag
