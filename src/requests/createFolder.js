export async function createFolder(folderName, path) {
    try {
        const response = await fetch(process.env.URL_TREE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ path: path, folderName: folderName }),
        });
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
