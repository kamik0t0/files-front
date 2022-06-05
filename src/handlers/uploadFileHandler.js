import { uploadFile } from "../requests/uploadFile.js";
import { createFileDomElem } from "../scripts/createFileDomElem.js";
import { determDomNodePath } from "../scripts/makeCatalogPath.js";
import { sortString } from "../scripts/sortString.js";

export function uploadFileHandler(event) {
    event.preventDefault();
    const input = document.getElementById("input__file");
    const folder = sessionStorage.getItem("folder");
    const folderPath = sessionStorage.getItem("folderPath");
    const path = folderPath || folder || "";
    const tree = document.getElementById("tree").firstElementChild.children;

    let fileName = event.target.value.slice(12);
    const file = event.target.files[0];
    const destFolder = determDomNodePath(path, tree).parentNode;
    const files = destFolder.lastElementChild.children;
    const params = `?filename=${path + "/" + fileName}`;
    // если одинаковые имена, то меняем имя
    for (let i = 0; i < files.length; i++) {
        if (fileName === files[i].firstElementChild.innerHTML) {
            fileName = fileName + i;
        }
    }
    try {
        uploadFile(file, params);
        const newFileDomElem = createFileDomElem(fileName);

        destFolder.lastElementChild.append(newFileDomElem);

        const sorted = [...destFolder.lastElementChild.children].sort(
            sortString
        );

        for (const fileDomElem of sorted) {
            destFolder.lastElementChild.append(fileDomElem);
        }
    } catch (error) {
        console.log(error);
        alert(error.message);
    }

    input.value = "";
}
