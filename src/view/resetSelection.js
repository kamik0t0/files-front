import { sessionStorageClear } from "../scripts/sessionStorageClear";

export function resetSelection(event) {
    if (event.target.tagName !== "SPAN") {
        sessionStorageClear();
        let selected = tree.querySelectorAll(".selected");
        for (let elem of selected) {
            elem.classList.remove("selected");
        }
    }
}
