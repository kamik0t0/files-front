import { openedFiles } from "../utils/openFilesArray.js";
import { showFile } from "../view/showFile.js";

export function clickCloseTabHandler(event) {
    if (event.target.className !== "closeBtn") return;
    const tabsList = document.getElementById("tabs").children;
    const tab = event.target.parentNode;

    for (let i = 0; i < tabsList.length; i++) {
        if (tabsList[i] === tab) {
            openedFiles.splice(i, 1);
            const lastOpenedFile =
                openedFiles[openedFiles.length - 1] === undefined
                    ? ""
                    : openedFiles[openedFiles.length - 1].content;
            showFile(lastOpenedFile);
        }
    }
    tab.remove();
}
