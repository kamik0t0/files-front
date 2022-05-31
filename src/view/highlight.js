export function higlightSelected(tree) {
    tree.addEventListener("click", (event) => {
        if (event.target.tagName !== "SPAN") return;

        if (event.ctrlKey || event.metaKey) {
            toggleSelect(event.target);
        } else {
            singleSelect(event.target, tree);
        }
    });
    tree.addEventListener("mousedown", () => false);
}

function toggleSelect(span) {
    span.classList.toggle("selected");
}

function singleSelect(span, tree) {
    let selected = tree.querySelectorAll(".selected");
    for (let elem of selected) {
        elem.classList.remove("selected");
    }
    span.classList.add("selected");
}
