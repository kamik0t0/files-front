import { readFile } from "../requests/readFile.js";
import { pathsHandler } from "../scripts/pathsHandler";
import { showFile } from "../view/showFile.js";
import { createTab } from "../view/createTab.js";
import { sessionStorageClear } from "../scripts/sessionStorageClear.js";
import { openedFiles } from "../utils/openFilesArray.js";
import { File } from "../utils/fileClass.js";

export async function clickFileHandler(event) {
    if (
        event.target.tagName !== "SPAN" ||
        event.target.nextElementSibling !== null
    )
        return false;
    if (event.target.nextElementSibling === null) {
        sessionStorageClear();
        pathsHandler(event);
        const filePath = sessionStorage.getItem("filePath");
        const file = sessionStorage.getItem("file");

        for (const file of openedFiles) {
            if (file.filePath === filePath) {
                showFile(file.content);
                return;
            }
        }

        const content = await readFile(
            sessionStorage.getItem("filePath"),
            process.env.URL_FILE_READ
        );

        openedFiles.push(new File(filePath, file, content));

        sessionStorage.setItem(filePath, content);
        showFile(content);
        createTab(file);
    }
}
