class CatalogService {
    constructor() {
        this.urls = {
            catalog: "http://vape-shop.herokuapp.com/catalog"
        };
    }

    getCatalog(success) {
        fetch(this.urls.catalog)
            .then(response => response.json())
            .then(response => success(response));
    }
}

export default CatalogService
