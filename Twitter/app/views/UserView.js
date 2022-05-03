const UserService = require('./../../app/services/UserService')

class UserView{
  static createUser(payload){
    const result = {
      error : ""
    };

    if(payload === null)
      result.error = "payload no existe";
      return result;
  }
}

module.exports = UserView