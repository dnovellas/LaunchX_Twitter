const User = require('./../models/User')

class UserService{
  static create(id, username, name){
    return new User(id, username, name, "Sin bio")
  }

  static getInfo(user){
    let userInfoInList = [];
    userInfoInList[0] = user.id;
    userInfoInList[1] = user.getUsername;;
    userInfoInList[2] = user.name;
    userInfoInList[3] = user.getBio;
    return userInfoInList;
  }
}

module.exports = UserService