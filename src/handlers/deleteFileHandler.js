import { deleteFile } from "../requests/deleteFile.js";
import { viewResultsProcedure } from "../view/viewResultsProcedure.js";

export function deleteFileHandler(event) {
    event.preventDefault();

    const file = sessionStorage.getItem("filePath");
    const params = `?fileName=${file}`;

    if (file) {
        viewResultsProcedure(deleteFile, params);
    } else {
        alert("Выберите файл");
    }
}
