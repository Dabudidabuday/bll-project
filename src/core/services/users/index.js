class UsersService {
    getNewUsers(success) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => success(response));
    }
}

export default UsersService
