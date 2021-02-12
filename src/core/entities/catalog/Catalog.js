import Entity from "core/entities/Entity";

class Catalog extends Entity {
    /**
     * @method getProducts
     * @returns {Array}
     */
    getItems() {
        return this.entity.products || [];
    }

    /**
     * @method getCurrentPage
     * @returns {Number}
     */
    getCurrentPage() {
        return this.entity.currentPage || 1;
    }

    /**
     * @method getTotalCount
     * @returns {Number}
     */
    getTotalCount() {
        return this.entity.totalCount || 0;
    }
}

export default Catalog;
