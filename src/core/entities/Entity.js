class Entity {
    constructor(entity) {
        this.entity = entity;
    }

    getId() {
        return this.entity.id || this.entity._id || '';
    }
}

export default Entity;
