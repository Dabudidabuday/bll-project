import Entity from "core/Entity";

class User extends Entity{
    getName() {
        return this.entity.name || '';
    }
}

export default User