function getAllPropertyNames(obj: Object): string[] {
    let result: string[] = [];
    let temp: string[];

    if (obj) {
        if (obj.constructor === {}.constructor)
            return Object.getOwnPropertyNames(obj);
        try {
            while (obj.constructor !== Object) {
                temp = Object.getOwnPropertyNames(obj);
                for (let i of temp) {
                    if (!result.includes(i))
                        result.push(i);
                }

                obj = Object.getPrototypeOf(obj);
            }
        } catch (e) {
            // continue regardless of error
        }
    }
    return result;
}

export const type = {
    getAllPropertyNames
};

export function extend() {
    Object.getAllPropertyNames = getAllPropertyNames;
}
