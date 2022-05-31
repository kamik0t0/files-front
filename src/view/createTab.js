import { clickTabHandler } from "../handlers/clickTabHandler.js";
import { clickCloseTabHandler } from "../handlers/clickCloseTabHandler.js";

/**
 * @function procedure, creates elements, adds eventListeners and handlers
 * @name createTab
 * @param {string} fileName accepts name of file which content and name will be shown
 */

export function createTab(fileName) {
    const tab = document.createElement("div");
    const closeBtn = document.createElement("div");

    closeBtn.classList.add("closeBtn");
    tab.classList.add("tab");
    tab.innerHTML = fileName;
    const tabs = document.getElementById("tabs");
    tab.append(closeBtn);
    tabs.append(tab);

    closeBtn.addEventListener("click", clickCloseTabHandler);
    tab.addEventListener("click", clickTabHandler);
}
