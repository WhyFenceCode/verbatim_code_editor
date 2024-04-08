const projectName = document.querySelector('.project-name');

function setName() {
    let nameWrapper = document.querySelector('.actions-main-name'); 
    let folderpath = nameWrapper.getAttribute('data-folderpath');
    let pathParts = folderpath.split('/');
    let foldername = pathParts[pathParts.length - 1];
    nameWrapper.setAttribute('data-foldername', foldername);
    projectName.textContent = foldername.toUpperCase();
}

setName();