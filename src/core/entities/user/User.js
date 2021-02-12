import Entity from "core/entities/Entity";

class User extends Entity {
    getName() {
        return this.entity.name || '';
    }
}

export default User;
