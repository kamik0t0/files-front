import { clickTabHandler } from "../handlers/clickTabHandler.js";
import { clickCloseTabHandler } from "../handlers/clickCloseTabHandler.js";
import { openedTabs } from "../utils/openFilesArray.js";
import { highlightTab } from "./highlight.js";

/**
 * @function procedure, creates elements, adds eventListeners and handlers
 * @name createTab
 * @param {string} fileName accepts name of file which content and name will be shown
 * @param {string} filePath accepts path to file with fileName
 */

export function createTab(fileName, filePath) {
    const tab = document.createElement("div");
    const closeBtn = document.createElement("div");

    closeBtn.classList.add("closeBtn");
    tab.classList.add("tab");
    tab.innerHTML = fileName;
    tab.append(closeBtn);
    // const tabs = document.getElementById("tabs");
    // tabs.append(tab);
    // highlightTab(tab);
    openedTabs.push({ tab: tab, filePath: filePath });
    closeBtn.addEventListener("click", clickCloseTabHandler);
    tab.addEventListener("click", clickTabHandler);
    return tab;
}
