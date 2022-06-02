import { rename } from "../requests/rename.js";
import { getPathToFolder, getFilePath } from "../scripts/getDir.js";
import { viewResultsProcedure } from "../view/viewResultsProcedure.js";
import { openedFiles } from "../utils/openFilesArray.js";
import { openedTabs } from "../utils/openFilesArray.js";

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
            for (let i = 0; i < openedFiles.length; i++) {
                const file = openedFiles[i];
                const tab = openedTabs[i];
                if (file.folderPath === folderPath) {
                    file.filePath = newName + "/" + file.file;
                    file.folderPath = newName;
                    file.folder = folder;
                    tab.filePath = newName + "/" + file.file;
                }
            }
        } else {
            alert("Выберите файл и измените имя");
        }
    } else {
        const file = sessionStorage.getItem("file");
        const filePath = sessionStorage.getItem("filePath");
        const newFileName = prompt("Введите имя файла", file);
        const newName = getFilePath(filePath) + "/" + newFileName;
        const params = `?oldName=${filePath}`;
        const tabsList = document.getElementById("tabs").children;

        if (filePath && newFileName) {
            viewResultsProcedure(rename, params, newName);

            for (let i = 0; i < openedFiles.length; i++) {
                const file = openedFiles[i];
                const tab = openedTabs[i];
                if (file.filePath === filePath) {
                    file.filePath = newName;
                    file.file = newFileName;
                    tab.filePath = newName;
                    tabsList[i].innerHTML = newFileName;
                    break;
                }
            }
        } else {
            alert("Выберите файл и измените имя");
        }
    }
}
