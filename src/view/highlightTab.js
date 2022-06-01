export function highlightTab(event, elem) {
    const tabs = document.getElementById("tabs");
    singleSelect(elem, tabs);
    tabs.addEventListener("mousedown", () => false);
}

function singleSelect(currentTab, tabs) {
    const selectedTabs = tabs.querySelectorAll(".selected-tab");
    for (let elem of selectedTabs) {
        elem.classList.remove("selected-tab");
    }
    currentTab.classList.add("selected-tab");
}
