export async function deleteFolder({ path, FolderName }) {
    try {
        const response = await fetch(
            process.env.URL_TREE + `?path=${path}&folderName=${FolderName}`,
            {
                method: "DELETE",
            }
        );

        if (response.ok) {
            return await response.json();
        } else {
            const error = await response.json();
            throw new Error(error.code);
        }
    } catch (error) {
        throw new Error(error);
    }
}
