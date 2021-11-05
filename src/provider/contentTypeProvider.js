import localforage from 'localforage'

export class ContentTypeProvider {
    constructor(key) {
        this.key = key || 'contentType'
        this.storage = localforage.createInstance({
            name: this.key
        });
    }

    async list() {
        try {
            return await this.storage.getItem(this.key);
        } catch (err) {
            console.error('ContentTypeProvider Error', err);
        }
    }

    async save(contentType) {
        try {
            const value = await this.storage.getItem(this.key);
            if (value) {
                return await this.doSave(contentType)
            }
        } catch (err) {
            console.error('ContentTypeProvider Error', err);
        }
        return await this.storage.setItem(this.key, contentType)
    }

    async doSave(contentType) {
        try {
            const value = await this.storage.setItem(this.key, contentType);
            console.log('ContentTypeProvider::doSave', value);
        } catch (err) {
            console.error('ContentTypeProvider Error', err);
        }
    }
}
