import { pathsHandler } from "../scripts/pathsHandler";

export function clickFolderHandler(event) {
    if (event.target.tagName !== "SPAN") return;
    if (event.target.nextElementSibling !== null) {
        sessionStorage.clear();
        const childrenContainer = event.target.parentNode.lastElementChild;

        pathsHandler(event, childrenContainer);

        if (childrenContainer.children.length > 0) {
            childrenContainer.hidden = !childrenContainer.hidden;
            childrenContainer.parentNode.classList.toggle("open-folder");
        } else {
            alert(
                `Папка ${event.target.parentNode.firstElementChild.innerHTML} пуста`
            );
        }
    }
}
