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
        } else {
            const error = await response.json();
            throw new Error(error.code);
        }
    } catch (error) {
        throw new Error(error);
    }
}
