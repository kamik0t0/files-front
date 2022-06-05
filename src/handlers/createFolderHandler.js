import { createFolder } from "../requests/createFolder.js";
import { determDomNodePath } from "../scripts/makeCatalogPath.js";
import { createFolderDomElem } from "../scripts/createFolderDomElem.js";
import { sortString } from "../scripts/sortString.js";

export function createFolderHandler() {
    const folderPath = sessionStorage.getItem("folderPath");
    const folder = sessionStorage.getItem("folder");
    const path = folderPath || folder || false;
    let tree = document.getElementById("tree").firstElementChild;

    let FolderName = prompt("Введите название папки", "Новая папка");
    const newFolderDomElem = createFolderDomElem(FolderName);

    if (path) {
        try {
            if (FolderName && createFolder(FolderName, path)) {
                const destFolder = determDomNodePath(
                    path,
                    tree.children
                ).parentNode;
                destFolder.lastElementChild.append(newFolderDomElem);
                const folders = destFolder.lastElementChild.children;

                for (let i = 0; i < folders.length; i++) {
                    if (FolderName === folders[i].firstElementChild.innerHTML) {
                        FolderName = FolderName + i;
                    }
                }
                const sorted = [...destFolder.lastElementChild.children].sort(
                    sortString
                );
                for (const folderDomElem of sorted) {
                    destFolder.lastElementChild.append(folderDomElem);
                }
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    } else {
        const createAnyway = confirm(
            "Папка будет создана в корневом каталоге! Для создания вложенной папки нажмите Отмена, выделите каталог и нажмите Создать папку"
        );

        try {
            if (createAnyway && FolderName && createFolder(FolderName, path)) {
                tree.append(newFolderDomElem);
                for (let i = 0; i < tree.length; i++) {
                    if (FolderName === tree[i].firstElementChild.innerHTML) {
                        FolderName = FolderName + i;
                    }
                }
                const sorted = [...tree.children].sort(sortString);
                for (const folderDomElem of sorted) {
                    tree.append(folderDomElem);
                }
            } else return;
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }
}
