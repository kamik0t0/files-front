export function createFileDomElem(fileName) {
    const li = document.createElement("li");
    li.classList.add("file");
    const span = document.createElement("span");
    span.innerHTML = fileName;
    li.append(span);
    return li;
}
