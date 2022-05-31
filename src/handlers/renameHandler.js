import { rename } from "../requests/rename.js";
import { getPathToFolder } from "../scripts/getDir.js";
import { viewResultsProcedure } from "../view/viewResultsProcedure.js";

export function renameHandler(event) {
    event.preventDefault();
    const isFolder = sessionStorage.getItem("isFolder");
    if (isFolder) {
        const folderPath = sessionStorage.getItem("folderPath");
        const folder = sessionStorage.getItem("folder");
        const newDirName = prompt("Введите имя папки", folder);
        const oldDir = folderPath || folder || false;
        let newName = newDirName;

        if (folderPath) {
            newName = getPathToFolder(oldDir) + newDirName;
        }
        const params = `?oldName=${oldDir}`;

        if (oldDir && newDirName) {
            viewResultsProcedure(rename, params, newName);
        } else {
            alert("Выберите файл и измените имя");
        }
    } else {
        const file = sessionStorage.getItem("file");
        const filePath = sessionStorage.getItem("filePath");
        const folderPath = sessionStorage.getItem("folderPath");
        const newFileName = prompt("Введите имя файла", file);
        const newName = folderPath + "/" + newFileName;
        const params = `?oldName=${filePath}`;

        if (filePath && newFileName) {
            viewResultsProcedure(rename, params, newName);
        } else {
            alert("Выберите файл и измените имя");
        }
    }
}
