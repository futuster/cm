class ContentType {
    title;
    alias;
    fields = [];
}

class Content {
    id;
    title;
    type;
    attributes = [];
    // .get('articleGroups')
    // get(alias) {
    //     const fieldValue =this.attributes.find(field => field.alias === alias)
    //     if(fieldValue.type === 'collect')
    //     return
    // }
}

class AttributeType {
    constructor(props){
        const {title, alias, type, reference, group, help} = {...props};
        this.title = title;
        this.alias = alias;
        this.group = group || '';
        this.type = type;
        this.reference = reference || null;
        this.help = help || '';
    }

}

class AttributeGroup {
}

class AttributeValue {
}


export {
    ContentType,
    Content,
    AttributeType,
    AttributeGroup,
    AttributeValue
}
