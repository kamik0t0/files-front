import { deleteFolder } from "../requests/deleteFolder.js";
import { viewResultsProcedure } from "../view/viewResultsProcedure.js";

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
            viewResultsProcedure(deleteFolder, reqParams);
        }

        sessionStorage.removeItem("path");
    } else {
        alert("Выберите папку!");
    }
}
