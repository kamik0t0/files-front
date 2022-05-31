export function sessionStorageClear() {
    for (const key in sessionStorage) {
        if (!sessionStorage.hasOwnProperty(key)) {
            continue;
        }
        if (
            key === "folder" ||
            key === "file" ||
            key === "isFolder" ||
            key === "folderPath" ||
            key === "filePath"
        ) {
            sessionStorage.removeItem(key);
        }
    }
}
