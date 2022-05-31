import { showFile } from "../view/showFile.js";
import { openedFiles } from "../utils/openFilesArray.js";

export function clickTabHandler(event) {
    if (event.target.className !== "tab") return;
    const currentTab = event.target;
    const tabsList = document.getElementById("tabs").children;
    if (tabsList.length === 0) showFile("");
    for (let i = 0; i < tabsList.length; i++) {
        if (tabsList[i] === currentTab) {
            showFile(openedFiles[i].content);
        }
    }
}
