import UsersService from "core/services/users";

class App {
    constructor() {
        this.usersService = new UsersService();
    }

    run() {
        this.usersService.getNewUsers((users) => {
            console.log(users);
        });
    }
}

window.onload = () => {
    const app = new App();
    app.run();
}
