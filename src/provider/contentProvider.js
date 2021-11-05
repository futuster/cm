import localforage from 'localforage'
import {Content} from "@/model/content/contentType";
import {v4 as uuidv4} from "uuid";

function getKey(type, key) {
    return `${key}_${type}`
}

export class ContentProvider {
    constructor(key) {
        this.key = key || 'content'
        this.storage = localforage.createInstance({
            name: this.key
        });
    }

    async create(content) {
        const c = Object.assign(new Content(), content)

        if (!c.id) {
            c.id = uuidv4()
        }

        console.log('create', c)
        await this.save(c)

    }

    async save(content) {
        console.log('CONTENT', content)
        content = JSON.parse(JSON.stringify(content))
        console.log('CONTENT', content)
        let list = [];

        try {
            list = await this.storage.getItem(getKey(content.type, this.key)) || []
            if (!list.find(c => c.id === content.id)) {
                list.push(content)
            } else {
                list = list.map(c => c.id === content.id ? content : c)
            }
        } catch (err) {
            console.error('ContentProvider Error', err);
        }
        const result = await this.storage.setItem(getKey(content.type, this.key), list)
        console.log('RESULT IS ', result, list)

    }

    async all(contentType) {
        try {
            return await this.storage.getItem(getKey(contentType, this.key));

        } catch (err) {
            console.error('ContentProvider Error', err);
        }
    }

    async saveAll(contentType, contentList) {
        try {
            const value = await this.storage.getItem(getKey(contentType, this.key));
            if (value) {
                return await this.doSave(contentType, contentList)
            }
        } catch (err) {
            console.error('ContentProvider Error', err);
        }
        return await this.storage.setItem(getKey(contentType, this.key), contentList)
    }

    async doSave(contentType, contentList) {
        try {
            const value = await this.storage.setItem(getKey(contentType, this.key), contentList);
            console.log('ContentProvider::doSave', value);
        } catch (err) {
            console.error('ContentProvider Error', err);
        }
    }
}
