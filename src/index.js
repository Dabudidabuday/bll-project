import UsersService from "core/services/users/index";
import CatalogService from "core/services/catalog/index";

import UserEntity from "./core/entities/user/User";
import CatalogEntity from "./core/entities/catalog/Catalog";

class App {
    constructor() {
        this.usersService = new UsersService;
        this.catalogService = new CatalogService;

        this.UserEntity = UserEntity;
        this.CatalogEntity = CatalogEntity;

        this.data = {
            users: [],
            catalog: {}
        };
    }

    _setNewUsers(container) {
        return new Promise((resolve) => {
            this.usersService.getNewUsers((users) => {
                container.users = users.map((user) => new this.UserEntity(user));

                resolve();
            });
        })
    }

    _setCatalog(container) {
        return new Promise((resolve) => {
            this.catalogService.getCatalog((catalog) => {
                container.catalog = new this.CatalogEntity(catalog);

                resolve();
            });
        })
    }

    _setInitialData() {
        return Promise.all([
            this._setNewUsers(this.data),
            this._setCatalog(this.data)
        ])
            .then(() => this.data)
            .catch(() => this.data)
    }

    run(initialData) {
        console.log(initialData);
    }
}

window.onload = () => {
    let app = new App();

    app._setInitialData()
        .then((initialData) => {
            app.run(initialData);
        });
}
