import { showFile } from "../view/showFile.js";
import { openedFiles } from "../utils/openFilesArray.js";
import { highlightFile } from "../view/highlight.js";
import { setFileInfoToStorage } from "../scripts/setFileInfoToStorage.js";
import { highlightTab } from "../view/highlight.js";
import { determDomNodePath } from "../scripts/makeCatalogPath.js";

export function clickTabHandler(event) {
    if (!event.target.classList.contains("tab")) return;
    const currentTab = event.target;
    highlightTab(event.target);
    const tabsList = document.getElementById("tabs").children;

    if (tabsList.length === 0) {
        showFile("");
        return;
    }

    for (let i = 0; i < tabsList.length; i++) {
        if (tabsList[i] === currentTab) {
            sessionStorage.clear();
            const file = openedFiles[i];
            showFile(file.content);
            setFileInfoToStorage(file);
            const node = determDomNodePath(
                file.filePath,
                document.getElementById("tree").firstElementChild.children
            );
            highlightFile(node);
        }
    }
}
