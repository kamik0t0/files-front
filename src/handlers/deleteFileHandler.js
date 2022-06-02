import { deleteFile } from "../requests/deleteFile.js";
import { viewResultsProcedure } from "../view/viewResultsProcedure.js";
import { openedFiles } from "../utils/openFilesArray.js";
import { openedTabs } from "../utils/openFilesArray.js";

export function deleteFileHandler(event) {
    event.preventDefault();

    const filePath = sessionStorage.getItem("filePath");
    const params = `?fileName=${filePath}`;
    const tabsList = document.getElementById("tabs").children;

    if (filePath) {
        viewResultsProcedure(deleteFile, params);

        for (let i = 0; i < openedFiles.length; i++) {
            const file = openedFiles[i];
            if (file.filePath === filePath) {
                openedFiles.splice(i, 1);
                openedTabs.splice(i, 1);
                tabsList[i].remove();
                break;
            }
        }
    } else {
        alert("Выберите файл");
    }
}
