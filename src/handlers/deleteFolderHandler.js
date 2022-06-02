import { deleteFolder } from "../requests/deleteFolder.js";
import { viewResultsProcedure } from "../view/viewResultsProcedure.js";
import { openedFiles, openedTabs } from "../utils/openFilesArray.js";

export function deleteFolderHandler() {
    const folderPath = sessionStorage.getItem("folderPath");
    const folder = sessionStorage.getItem("folder");

    const path = folderPath !== null ? folderPath : folder;
    const FolderName = folder;

    const reqParams = {
        path,
        FolderName,
    };
    if (path && FolderName) {
        const confirmDelete = confirm(
            `Вы действительно хотите удалить папку ${FolderName}`
        );
        if (confirmDelete) {
            if (viewResultsProcedure(deleteFolder, reqParams)) {
                const tabsList = document.getElementById("tabs").children;
                for (let i = 0; i < openedFiles.length; i++) {
                    const file = openedFiles[i];
                    console.log(24, openedFiles);
                    console.log(25, tabsList);
                    console.log(26, i);
                    if (file.folderPath === path) {
                        console.log("true");
                        openedFiles.splice(i, 1);
                        openedTabs.splice(i, 1);
                        tabsList[i].remove();
                        i--;
                    }
                }
            }
        }

        sessionStorage.removeItem("path");
    } else {
        alert("Выберите папку!");
    }
}
