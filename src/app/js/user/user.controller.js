"use strict";
var app_1 = require('../app');
var User = (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    return User;
}());
var UserController = (function () {
    function UserController() {
        var name = 'my name';
        var users = [new User(1, 'q'), new User(2, 'qq')];
    }
    UserController.prototype.save = function () {
        //toDo
    };
    return UserController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserController;
app_1.app.controller('UserController', UserController);
