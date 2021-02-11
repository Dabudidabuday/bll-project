class UsersService {
    constructor() {
        this.GET_USERS = 'https://jsonplaceholder.typicode.com/users';
    }

    getNewUsers(success) {
        fetch(this.GET_USERS)
            .then(response => response.json())
            .then(response => success(response));
    }
}

export default UsersService
