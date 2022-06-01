export function highlightFile(elem) {
    if (elem.tagName !== "SPAN") return;
    const tree = document.getElementById("tree").firstElementChild;
    singleSelect(elem, tree, "selected");
    tree.addEventListener("mousedown", () => false);
}

export function highlightTab(elem) {
    if (elem.className !== "tab") return;
    const tabs = document.getElementById("tabs");
    singleSelect(elem, tabs, "selected-tab");
    tabs.addEventListener("mousedown", () => false);
}

function singleSelect(elem, tree, selector) {
    let selected = tree.querySelectorAll("." + selector);
    for (let elem of selected) {
        elem.classList.remove(selector);
    }
    elem.classList.add(selector);
}
