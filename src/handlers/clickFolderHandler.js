import { pathsHandler } from "../scripts/pathsHandler";
import { sessionStorageClear } from "../scripts/sessionStorageClear.js";

export function clickFolderHandler(event) {
    if (event.target.tagName !== "SPAN") return;
    if (event.target.nextElementSibling !== null) {
        sessionStorageClear();
        const childrenContainer = event.target.parentNode.querySelector("ul");
        pathsHandler(event, childrenContainer);
        childrenContainer.hidden = !childrenContainer.hidden;
        childrenContainer.parentNode.classList.toggle("open-folder");
    }
}
