import { uploadFile } from "../requests/uploadFile.js";
import { viewResultsProcedure } from "../view/viewResultsProcedure.js";
const input = document.getElementById("input__file");

export function uploadFileHandler(event) {
    event.preventDefault();
    const folder = sessionStorage.getItem("folder");
    const folderPath = sessionStorage.getItem("folderPath");
    const path = folderPath || folder || "";

    const fileName = event.target.value.slice(12);
    const file = event.target.files[0];
    const params = `?filename=${path + "/" + fileName}`;

    viewResultsProcedure(uploadFile, file, params);

    input.value = "";
}
