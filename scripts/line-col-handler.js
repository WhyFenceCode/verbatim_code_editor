let colLine = document.querySelector('.lowerbar-ln-col');

function getCursorPosition(textarea) {
    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.substring(0, cursorPosition);
    const lineNumber = (textBeforeCursor.match(/\n/g) || []).length;
    const columnNumber = cursorPosition - textBeforeCursor.lastIndexOf('\n') - 1;

    return { lineNumber, columnNumber };
}

function cursorMove(e) {
    const textarea = e.target;
    const { lineNumber, columnNumber } = getCursorPosition(textarea);
    colLine.textContent = `Ln:Col ${lineNumber + 1}:${columnNumber + 1}`;
}

// Attach the event listener for keydown, click, and focus events
document.addEventListener('keydown', cursorMove);
document.addEventListener('keyup', cursorMove);
document.addEventListener('keypress', cursorMove);
document.addEventListener('click', cursorMove);
document.addEventListener('focus', cursorMove, true);