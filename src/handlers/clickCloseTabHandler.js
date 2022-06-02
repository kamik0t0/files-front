import { openedFiles } from "../utils/openFilesArray.js";
import { showFile } from "../view/showFile.js";
import { highlightFile } from "../view/highlight.js";
import { highlightTab } from "../view/highlight.js";
import { setFileInfoToStorage } from "../scripts/setFileInfoToStorage.js";
import { resetSelection } from "../view/resetSelection.js";
import { openedTabs } from "../utils/openFilesArray.js";
import { createNodePath } from "../scripts/makeCatalogPath.js";

export function clickCloseTabHandler(event) {
    if (event.target.className !== "closeBtn") return;
    const tabsList = document.getElementById("tabs").children;
    const closedTab = event.target.parentNode;

    for (let i = 0; i < tabsList.length; i++) {
        if (tabsList[i] === closedTab) {
            openedFiles.splice(i, 1);
            const [deletedTab] = openedTabs.splice(i, 1);
            const lastOpenedFile = openedFiles[openedFiles.length - 1];
            const lastOpenedTab = openedTabs[openedTabs.length - 1];
            // если длина массива вкладок === 0
            if (lastOpenedFile === undefined) {
                showFile("");
                sessionStorage.clear();
                resetSelection(event);
                // если закрывается активная вкладка, то требуется перерисовка
            } else if (
                deletedTab.filePath === sessionStorage.getItem("filePath")
            ) {
                showFile(lastOpenedFile.content);
                setFileInfoToStorage(lastOpenedFile);
                const fileDomElem = createNodePath(
                    lastOpenedFile.filePath,
                    document.getElementById("tree").firstElementChild.children
                );
                highlightFile(fileDomElem);
                highlightTab(lastOpenedTab.tab);
            }
        }
    }
    closedTab.remove();
}
