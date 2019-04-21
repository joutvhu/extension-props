export function getAllPropertyNames(obj: any): string[] {
    const result: string[] = [];
    let temp: string[];
    let i;

    if (obj) {
        if (obj.constructor === {}.constructor)
            return Object.getOwnPropertyNames(obj);
        try {
            while (obj.constructor !== Object) {
                temp = Object.getOwnPropertyNames(obj);
                for (i of temp) {
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

export function getAllPropertyDescriptor(obj: any, p: string): any {
    let names: any[];
    let i;
    let temp;

    if (obj) {
        if (obj.constructor === {}.constructor) {
            names = Object.getOwnPropertyNames(obj);
            for(i of names) {
                if(i == p) {
                    temp = Object.getOwnPropertyDescriptor(obj, i);
                    if (temp !== undefined) return temp;
                }
            }
        } else {
            try {
                while (obj.constructor !== Object) {
                    names = Object.getOwnPropertyNames(obj);
                    for (i of names) {
                        if (i == p) {
                            temp = Object.getOwnPropertyDescriptor(obj, i);
                            if (temp !== undefined) return temp;
                        }
                    }

                    obj = Object.getPrototypeOf(obj);
                }
            } catch (e) {
                // continue regardless of error
            }
        }
    }
    return undefined;
}

export function getAllPropertyDescriptors(obj: any): any {
    const result: any = {};
    let names: string[];
    let i;
    let temp;

    if (obj) {
        if (obj.constructor === {}.constructor) {
            names = Object.getOwnPropertyNames(obj);
            for(i of names) {
                temp = Object.getOwnPropertyDescriptor(obj, i);
                if(temp !== undefined) result[i] = temp;
            }
        } else {
            try {
                while (obj.constructor !== Object) {
                    names = Object.getOwnPropertyNames(obj);
                    for (i of names) {
                        if (result[i] === undefined ||
                            (i === 'constructor' && result[i].constructor !== {}.constructor)) {
                            temp = Object.getOwnPropertyDescriptor(obj, i);
                            if(temp !== undefined) result[i] = temp;
                        }
                    }

                    obj = Object.getPrototypeOf(obj);
                }
            } catch (e) {
                // continue regardless of error
            }
        }
    }
    return result;
}

export function isBlank(v: any): boolean {
    return v === undefined || v === null;
}

export function isNotBlank(v: any): boolean {
    return v !== undefined && v !== null;
}
