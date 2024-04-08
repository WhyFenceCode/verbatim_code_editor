function saveFileExists(e) {
    let text = e.value;
    let filePath = e.getAttribute('data-filepath');
}

function loadFileExists(text, path) {
    let e = document.getElementById('.content');
    e.value = text;
    e.setAttribute('data-filepath', path);
}