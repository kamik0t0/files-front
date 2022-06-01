export function setFileInfoToStorage(file) {
    sessionStorage.setItem("filePath", file.filePath);
    sessionStorage.setItem("file", file.file);
    sessionStorage.setItem("folderPath", file.folderPath);
    sessionStorage.setItem("folder", file.folder);
}
