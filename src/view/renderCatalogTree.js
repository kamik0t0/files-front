export function renderCatalogTree(object) {
    const startUl = makeRawList(object.children);

    const tree = document.getElementById("tree");
    tree.append(startUl);

    recursive(object, startUl.children);

    function recursive({ name, children }, lis) {
        for (let i = 0; i < children.length; i++) {
            let elem = children[i];
            const li = document.createElement("li");
            li.innerHTML = name;

            if (typeof elem === "object") {
                const files = makeRawList(elem.children);
                lis[i].innerHTML = elem.name;
                lis[i].append(files);
                files.hidden = !files.hidden;
                recursive(elem, files.children);
            }
        }
    }
}

function makeRawList(array) {
    const files = document.createElement("ul");
    for (const elem of array) {
        const li = document.createElement("li");

        if (typeof elem === "object") {
            li.innerHTML = elem.name;
            li.classList.add("close-folder");
            files.append(li);
        } else {
            li.innerHTML = elem;
            li.classList.add("file");
            files.append(li);
        }
    }
    return files;
}
