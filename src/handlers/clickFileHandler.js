import { readFile } from "../requests/readFile.js";
import { pathsHandler } from "../scripts/pathsHandler";
import { showFile } from "../view/showFile.js";
import { createTab } from "../view/createTab.js";
import { openedFiles } from "../utils/openFilesArray.js";
import { openedTabs } from "../utils/openFilesArray.js";
import { File } from "../utils/fileClass.js";
import { highlightTab } from "../view/highlight.js";

export async function clickFileHandler(event) {
    if (
        event.target.tagName !== "SPAN" ||
        event.target.nextElementSibling !== null
    )
        return false;
    if (event.target.nextElementSibling === null) {
        sessionStorage.clear();
        pathsHandler(event); // переписать на 2 функции filePathhandler и folderPathHandler
        const filePath = sessionStorage.getItem("filePath");
        const file = sessionStorage.getItem("file");
        const folderPath = sessionStorage.getItem("folderPath");
        const folder = sessionStorage.getItem("folder");

        for (let i = 0; i < openedFiles.length; i++) {
            let file = openedFiles[i];
            if (file.filePath === filePath) {
                showFile(file.content);
                highlightTab(openedTabs[i].tab);
                return;
            }
        }

        const content = await readFile(
            sessionStorage.getItem("filePath"),
            process.env.URL_FILE_READ
        );

        openedFiles.push(new File(filePath, file, folderPath, folder, content));
        console.log(openedFiles);
        showFile(content);
        createTab(file, filePath);
    }
}
