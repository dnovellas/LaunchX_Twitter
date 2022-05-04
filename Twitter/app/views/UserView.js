const UserService = require('./../../app/services/UserService')

class UserView{
  static createUser(payload){
    const result = {
      error : "",
      user: null
    };

    if(payload === null){
        result.error = "payload no existe";      
    }else{
      // Validate payload
      if(this.validatePayload(payload)){
        result.user = UserService.create(payload.id, payload.username, payload.name);
      }else
      {
        result.error = "necesitan tener un valor válido";
      }
    }
    return result;
  }

  static validatePayload(payload){
    let isPayloadValid = false;
    
    // validate payload.id
    if (payload.id != null && payload.id != "" && !isNaN(payload.id)) {
      isPayloadValid = true;
    }

    // validate payload.name
    if (payload.name != null && payload.name != "" && isNaN(payload.name)) {
      isPayloadValid = true;
    }

    //validate payload.username
    if (payload.username != null && payload.username != "" && isNaN(payload.username)) {
      isPayloadValid = true;
    }

    return isPayloadValid;
  }
}

module.exports = UserView