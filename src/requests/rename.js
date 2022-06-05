export async function rename(params, newName, isFolder = false) {
    try {
        const response = await fetch(process.env.URL_COMMON + "/" + params, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newName: newName, isFolder: isFolder }),
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        throw new Error(error);
    }
}
