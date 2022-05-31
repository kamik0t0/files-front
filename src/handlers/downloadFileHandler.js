import { downloadFile } from "../requests/downloadFile";

export function downloadFileHandler() {
    const filePath = sessionStorage.getItem("filePath");
    if (filePath) downloadFile(filePath);
}
