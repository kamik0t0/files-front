export function createFolderDomElem(folderName) {
    const li = document.createElement("li");
    li.classList.add("close-folder");
    const span = document.createElement("span");
    span.innerHTML = folderName;
    const ul = document.createElement("ul");
    ul.hidden = true;
    li.append(span);
    li.append(ul);
    return li;
}
