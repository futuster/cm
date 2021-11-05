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
                    type: 'string',
                }),
                new AttributeType({
                    title: 'Алиас',
                    alias: 'slug',
                    type: 'string',
                }),
                new AttributeType({
                    title: 'Картинка для заголовка',
                    alias: 'titleImage',
                    type: 'asset',
                }),
                new AttributeType({
                    title: 'Иконка',
                    alias: 'iconImage',
                    type: 'asset',
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
                    type: 'reference',
                    reference: 'groupArticle'
                }),
                new AttributeType({
                    title: 'Авторы',
                    alias: 'authors',
                    type: 'reference',
                    reference: 'user'
                }),
                new AttributeType({
                    title: 'Спонсоры раздела',
                    alias: 'sponsors',
                    type: 'reference',
                    reference: 'company'
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
                    type: 'string',
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
                    type: 'string',
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
    ])

    document.location.reload()
}
