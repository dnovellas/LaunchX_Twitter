const User = require('./../../app/models/User')
describe("Unit Test for User class", ()=>{
  test('Add getters', ()=>{
    //Aquí invocas el código que vas a usar en tu app
    const user = new User(1, "carlogilmar", "Carlo", "Bio");    
    
    expect(user.getUsername).toBe("carlogilmar");    
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined(); // Verifica que el valor no sea undefined;
    expect(user.getLastUpdated).not.toBeUndefined();
  })
})