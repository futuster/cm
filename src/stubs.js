import {AttributeType} from "@/model/content/contentType";
import {ContentTypeProvider} from '@/provider/contentTypeProvider'

const contentTypeProvider = new ContentTypeProvider()

export async function seed() {
    await contentTypeProvider.save([
        {
            title: 'Раздел',
            alias: 'chapter',
            attributes: [
                new AttributeType({
                    title: 'Заголовок',
                    alias: 'title',
                    type: 'text',
                }),
                new AttributeType({
                    title: 'Картинка для заголовка',
                    alias: 'titleImage',
                    type: 'image',
                }),
                new AttributeType({
                    title: 'Иконка',
                    alias: 'iconImage',
                    type: 'image',
                }),
                new AttributeType({
                    title: 'Краткое описание',
                    help: 'Для списков',
                    alias: 'shortDescription',
                    type: 'text',
                }),
                new AttributeType({
                    title: 'Описание',
                    help: 'Для страницы',
                    alias: 'description',
                    type: 'text',
                }),
                new AttributeType({
                    title: 'Группы статей',
                    alias: 'articleGroupList',
                    type: 'collection',
                    reference: 'groupArticle'
                }),
                new AttributeType({
                    title: 'Авторы',
                    alias: 'authors',
                    type: 'collection',
                    reference: 'user'
                }),
                new AttributeType({
                    title: 'Спонсоры раздела',
                    alias: 'sponsors',
                    type: 'collection',
                    reference: 'company1'
                }),
            ],
        },
        {
            title: 'Группа статей',
            alias: 'groupArticle',
            attributes: [
                new AttributeType({
                    title: 'Заголовок',
                    alias: 'title',
                    type: 'text',
                }),
                new AttributeType({
                    title: 'Картинка для заголовка',
                    alias: 'titleImage',
                    type: 'image',
                }),
                new AttributeType({
                    title: 'Иконка',
                    alias: 'iconImage',
                    type: 'image',
                }),
                new AttributeType({
                    title: 'Краткое описание',
                    help: 'Для списков',
                    alias: 'shortDescription',
                    type: 'text',
                }),
                new AttributeType({
                    title: 'Описание',
                    help: 'Для страницы',
                    alias: 'description',
                    type: 'text',
                }),
            ]
        },
        {
            title: 'Статья',
            alias: 'article',
            attributes: [
                new AttributeType({
                    title: 'Заголовок',
                    alias: 'title',
                    type: 'text',
                }),
                new AttributeType({
                    title: 'Картинка для заголовка',
                    alias: 'titleImage',
                    type: 'image',
                }),
                new AttributeType({
                    title: 'Иконка',
                    alias: 'iconImage',
                    type: 'image',
                }),
                new AttributeType({
                    title: 'Краткое описание',
                    help: 'Для списков',
                    alias: 'shortDescription',
                    type: 'text',
                }),
            ]
        },
        {
            title: 'Компания',
            alias: 'company',
            attributes: [
                new AttributeType({
                    title: 'Название',
                    alias: 'name',
                    type: 'text',
                }),
            ]
        },
        {
            title: 'Пользователь',
            alias: 'user',
            attributes: []
        }
    ]);

}
