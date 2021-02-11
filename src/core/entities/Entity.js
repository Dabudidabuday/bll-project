class Entity {
    constructor(entity) {
        this.entity = entity;
    }

    getId() {
        return this.entity.id || '';
    }
}

export default Entity