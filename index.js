"use strict";

module.exports = function dotfind(path, object) {
    if (!path) {
        return object;
    }

    if (!object) {
        return undefined;
    }

    //Remove the encompasing [..]
    const pathParts = path.replace(/]/g, "").replace(/\[/g, ".").split(".");

    for (let i = 0; i < pathParts.length; i += 1) {
        const path = pathParts.slice(0, i + 1).join(".");
        const restPath = pathParts.slice(i + 1).join(".");

        if (path in object) {
            const res = dotfind(restPath, object[path]);
            if (res !== undefined) {
                return res;
            }
        }
    }

    return undefined;
};
