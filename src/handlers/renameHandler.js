import { rename } from "../requests/rename.js";
import { getPathToFolder } from "../scripts/getDir.js";
import { openedFiles } from "../utils/openFilesArray.js";
import { openedTabs } from "../utils/openFilesArray.js";
import { createTab } from "../view/createTab.js";
import { highlightFile, highlightTab } from "../view/highlight.js";
import { determDomNodePath } from "../scripts/makeCatalogPath.js";
import { createFileDomElem } from "../scripts/createFileDomElem.js";

export async function renameHandler(event) {
    event.preventDefault();
    const isFolder = sessionStorage.getItem("isFolder");
    const tree = document.getElementById("tree").firstElementChild.children;
    const tabsList = document.getElementById("tabs").children;
    if (isFolder) {
        const folderPath = sessionStorage.getItem("folderPath");
        const folder = sessionStorage.getItem("folder");
        const newFolderName = prompt("Введите имя папки", folder);
        // вложенная папка || корневой каталог || папка не выбрана
        const oldFolder = folderPath || folder || false;

        const newFolderPath = getPathToFolder(oldFolder) + newFolderName;

        const params = `?oldName=${oldFolder}`;

        if (oldFolder && newFolderName) {
            try {
                rename(params, newFolderPath, isFolder);
                // определяем элемент в DOM
                const oldFolderNameSpanElem = determDomNodePath(
                    folderPath,
                    tree
                );
                // обновляем название в DOM
                oldFolderNameSpanElem.innerHTML = newFolderName;
                // обновляем пути для всех открытых вкладок
                for (let i = 0; i < openedFiles.length; i++) {
                    const file = openedFiles[i];
                    const tab = openedTabs[i];
                    file.filePath = newFolderPath + "/" + file.file;
                    file.folderPath = newFolderPath;
                    file.folder = folder;
                    tab.filePath = newFolderPath + "/" + file.file;
                }
                sessionStorage.setItem("folderPath", newFolderPath);
                sessionStorage.setItem("folder", newFolderName);
            } catch (error) {
                console.log(error);
                alert(error.message);
            }
        } else {
            alert("Выберите папку и нажимите Переименовать");
        }
    } else {
        const file = sessionStorage.getItem("file");
        const filePath = sessionStorage.getItem("filePath");
        const folderPath = sessionStorage.getItem("folderPath");
        const fileName = prompt("Введите имя файла", file);

        const newFilePath = folderPath + "/" + fileName;

        const params = `?oldName=${filePath}`;

        if (filePath && fileName) {
            try {
                rename(params, newFilePath);
                // определяем элемент в DOM
                const oldFileDomElem = determDomNodePath(
                    filePath,
                    tree
                ).parentNode;
                // создаем, обновляем и подсвечиваем элеметы в DOM
                const newFileDomElem = createFileDomElem(fileName);
                oldFileDomElem.replaceWith(newFileDomElem);
                highlightFile(newFileDomElem.firstElementChild);
                // обновляем файл и вкладку
                for (let i = 0; i < openedFiles.length; i++) {
                    const file = openedFiles[i];
                    const tab = openedTabs[i];
                    if (file.filePath === filePath) {
                        file.filePath = newFilePath;
                        file.file = fileName;
                        tab.filePath = newFilePath;
                        tab.tab = createTab(file.file, file.filePath);
                        tabsList[i].replaceWith(tab.tab);
                        highlightTab(tab.tab);
                        break;
                    }
                }
            } catch (error) {
                console.log(error);
                alert(error.message);
            }
        } else {
            alert("Выберите файл и нажимите Переименовать");
        }
    }
}
