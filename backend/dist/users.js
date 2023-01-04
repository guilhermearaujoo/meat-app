"use strict";
exports.__esModule = true;
exports.users = exports.User = void 0;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return (another !== undefined &&
            another.email === this.email &&
            another.password === this.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    "ghma.em@gmail.com": new User("ghma.em@gmail.com", "Guilherme", "G78317886g!"),
    "clefidelis@gmail.com": new User("clefidelis@gmail.com", "Clécia", "clecia19!")
};
