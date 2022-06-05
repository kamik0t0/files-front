import { deleteFile } from "../requests/deleteFile.js";
import { openedFiles } from "../utils/openFilesArray.js";
import { openedTabs } from "../utils/openFilesArray.js";
import { determDomNodePath } from "../scripts/makeCatalogPath.js";

export function deleteFileHandler(event) {
    event.preventDefault();

    const filePath = sessionStorage.getItem("filePath");
    const file = sessionStorage.getItem("file");
    const params = `?fileName=${filePath}`;
    const tabsList = document.getElementById("tabs").children;
    const tree = document.getElementById("tree").firstElementChild.children;

    if (filePath) {
        const confirmDelete = confirm(
            `Вы уверены что хотите удалить файл ${file}`
        );
        try {
            if (confirmDelete && deleteFile(params)) {
                // определяем элемент в DOM
                const oldFileDomElem = determDomNodePath(
                    filePath,
                    tree
                ).parentNode;
                // удаляем DOM элемент из дерева файлов
                oldFileDomElem.remove();
                for (let i = 0; i < openedFiles.length; i++) {
                    const file = openedFiles[i];
                    if (file.filePath === filePath) {
                        openedFiles.splice(i, 1);
                        openedTabs.splice(i, 1);
                        // удаляем DOM элемент из вкладок
                        tabsList[i].remove();
                        break;
                    }
                }
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    } else {
        alert("Выберите файл");
    }
}
