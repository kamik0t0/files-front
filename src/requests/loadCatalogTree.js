export async function loadCatalogTree() {
    try {
        const response = await fetch(process.env.URL_TREE);
        if (response.ok) {
            const Tree = await response.json();
            return Tree;
        } else {
            const error = await response.json();
            throw new Error(error.code);
        }
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
}
