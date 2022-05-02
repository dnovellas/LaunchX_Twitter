const User = require('./../../app/models/User')
describe("Unit Test for User class", ()=>{
  test('Add setters', ()=>{
    //Aquí invocas el código que vas a usar en tu app
    const user = new User(1, "carlogilmar", "Carlo", "Bio");    
    user.setUsername = "Gilmar";
    expect(user.getUsername).toBe("Gilmar");    

    user.setBio = "New Bio";    
    expect(user.getBio).toBe("New Bio");
  })
})