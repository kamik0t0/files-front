import { createRelativePath } from "../scripts/makeCatalogPath.js";
import { getFileFolder } from "./getDir.js";

export function pathsHandler(event) {
    // если папка
    if (event.target.nextElementSibling !== null) {
        const childrenContainer = event.target.parentNode.querySelector("ul");
        const path = createRelativePath(childrenContainer.parentNode);

        if (path.includes("/")) sessionStorage.setItem("folderPath", path);
        else sessionStorage.removeItem("folderPath");
        sessionStorage.setItem(
            "folder",
            childrenContainer.parentNode.firstChild.textContent
        );
        sessionStorage.setItem("isFolder", true);
        // если файл
    } else {
        const childrenContainer = event.target.parentNode.parentNode;
        const path = createRelativePath(childrenContainer.parentNode);
        sessionStorage.setItem("folderPath", path);

        if (path.includes("/")) {
            sessionStorage.setItem("folder", getFileFolder(path));
        } else sessionStorage.setItem("folder", path);

        const file = event.target.textContent;
        sessionStorage.setItem(
            "filePath",
            createRelativePath(event.target.parentNode)
        );
        sessionStorage.setItem("file", file);
    }
}
