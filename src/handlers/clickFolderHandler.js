import { pathsHandler } from "../scripts/pathsHandler";

export function clickFolderHandler(event) {
    if (event.target.tagName !== "SPAN") return;
    if (event.target.nextElementSibling !== null) {
        sessionStorage.clear();
        const childrenContainer = event.target.parentNode.querySelector("ul");
        pathsHandler(event, childrenContainer);
        childrenContainer.hidden = !childrenContainer.hidden;
        childrenContainer.parentNode.classList.toggle("open-folder");
    }
}
