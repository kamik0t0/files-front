import { deleteFolder } from "../requests/deleteFolder.js";
import { openedFiles, openedTabs } from "../utils/openFilesArray.js";
import { determDomNodePath } from "../scripts/makeCatalogPath.js";

export function deleteFolderHandler() {
    const folderPath = sessionStorage.getItem("folderPath");
    const folder = sessionStorage.getItem("folder");

    const path = folderPath !== null ? folderPath : folder;
    const FolderName = folder;
    const tree = document.getElementById("tree").firstElementChild.children;

    const reqParams = {
        path,
        FolderName,
    };

    // определяем элемент в DOM

    if (path && FolderName) {
        const confirmDelete = confirm(
            `Вы действительно хотите удалить папку ${FolderName}`
        );
        try {
            if (confirmDelete && deleteFolder(reqParams)) {
                const oldFolderDomElem = determDomNodePath(
                    path,
                    tree
                ).parentNode;

                const tabsList = document.getElementById("tabs").children;

                for (let i = 0; i < openedFiles.length; i++) {
                    const file = openedFiles[i];
                    if (file.folderPath === path) {
                        openedFiles.splice(i, 1);
                        openedTabs.splice(i, 1);
                        tabsList[i].remove();
                        i--;
                    }
                }

                oldFolderDomElem.remove();
            }

            sessionStorage.removeItem("path");
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    } else {
        alert("Выберите папку!");
    }
}
