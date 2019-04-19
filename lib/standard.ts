export default function standard() {
    if(!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
            value: function(valueToFind, fromIndex) {
                let o, len, n, k;

                if (this == null)
                    throw new TypeError('"this" is null or not defined');

                o = Object(this);
                len = o.length >>> 0;
                if (len === 0) return false;
                n = fromIndex | 0;
                k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                function sameValueZero(x, y) {
                    return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
                }

                while (k < len) {
                    if (sameValueZero(o[k], valueToFind))
                        return true;
                    k++;
                }
                return false;
            }
        });
    }
}
