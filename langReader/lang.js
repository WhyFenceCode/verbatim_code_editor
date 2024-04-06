const langs = '{"abnf":"abnf","htaccess":"apache","ino":"arduino","apj":"aspectj","sh":"bash","bnf":"bnf","c":"c","cpp":"cpp","cr":"crystal","cs":"csharp","csx":"csharp","csp":"csp","css":"css","d":"d","dpr":"dpr","pas":"pascal","dst":"dust","ebnf":"ebnf","glsl":"glsl","fsh":"glsl","vsh":"glsl","csh":"glsl","go":"golang","haml":"haml","hx":"haxe","http":"http","lhs":"haskell","hs":"haskell","html":"html","htm":"html","java":"java","class":"java","jar":"java","jmod":"java","js":"javascript","cjs":"javascript","mjs":"javascript","json":"json","kt":"kotlin","lasso":"lasso","less":"less","lua":"lua","md":"markdown","mk":"makefile","mak":"makefile","make":"makefile","nim":"nimrod","nix":"nix","nixpkg":"nix","pl":"perl","pm":"perl","php":"php","txt":"text","pde":"processing","py":"python","pyw":"python","pyz":"python","pyi":"python","pyc":"python","pyd":"python","rb":"ruby","ru":"ruby","rs":"rust","rlib":"rust","scss":"scss","sql":"sql","swift":"swift","ts":"typescript","tsx":"typescript","mts":"typescript","cts":"typescript","vala":"vala","vapi":"vala","wat":"wasm","xml":"xml","yaml":"yaml","yml":"yaml"}';
const lowerBarLang = document.querySelector('.lowerbar-lang');

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

setLang();