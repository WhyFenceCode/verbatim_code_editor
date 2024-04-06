const lowerBarLang = document.querySelector('.lowerbar-lang');
let langs = '';

function setLang() {
    const data = JSON.parse(langs);
    
    const codeInputs = document.querySelectorAll('code-input'); 
    codeInputs.forEach(input => {
        let filepath = input.getAttribute('data-filepath');
        let extension = getFileExtension(filepath);
        if (extension) {
            input.setAttribute('language', data[extension]);
            lowerBarLang.textContent = data[extension].toUpperCase();
        }else{
            input.setAttribute('language', 'text');
        }
    }); 
}

function getFileExtension(fileName) {
    const parts = fileName.split('.');
    if (parts.length === 1) {
        return null;
    }
    return parts[parts.length - 1];
}

langs = getLangBindings();
setLang();