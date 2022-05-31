import { createFolder } from "../requests/createFolder.js";
import { viewResultsProcedure } from "../view/viewResultsProcedure.js";

export function createFolderHandler() {
    const folderPath = sessionStorage.getItem("folderPath");
    const folder = sessionStorage.getItem("folder");
    const path = folderPath || folder || false;

    const FolderName = prompt("Введите название папки", "Новая папка");

    if (path) {
        viewResultsProcedure(createFolder, FolderName, path);
    } else {
        const createAnyway = confirm(
            "Папка будет создана в корневом каталоге! Для создания вложенной папки нажмите Отмена, выделите каталог и нажмите Создать папку"
        );
        if (createAnyway) {
            viewResultsProcedure(createFolder, FolderName);
        } else return;
    }
}
