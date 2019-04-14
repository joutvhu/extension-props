export default class OverridingError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'Overriding Error';
    }
}
