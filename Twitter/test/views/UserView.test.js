const UserView = require('./../../app/views/UserView')

// describe("Test for UserView", ()=>{
//   test("Return an error object when try to create a new user with an null payload", ()=>{
//     const payload = null;
//     const result = UserView.createUser(payload)   
//     //httops://jestjs.io/docs/using-matchers#strings
//     expect(result.error).toMatch(/payload no existe/)    
//   })
// })

// describe("Test for UserView", ()=>{
//   test("Return an error object when try to create a new user with payload with invalid properties", ()=>{
//     const payload = {username:null, name:12, id:"id"};
//     const result = UserView.createUser(payload)   
//     //httops://jestjs.io/docs/using-matchers#strings
//     expect(result.error).toMatch(/necesitan tener un valor válido/)
//   })
// })

// describe("Test for UserView", ()=>{
//   test("Return an error object when try to create a new user with payload with missing properties", ()=>{
//     const payload = {username:"username"};
//     const result = UserView.createUser(payload)
//     //httops://jestjs.io/docs/using-matchers#strings
//     expect(result.error).toMatch(/necesitan tener un valor válido/)
//   })
// })

describe("Test for UserView", ()=>{
  test("Create a user by the given payload", ()=>{
    const payload = {username:"username", id:1, name: "name"};
    const result = UserView.createUser(payload)
    //httops://jestjs.io/docs/using-matchers#strings
    expect(result.name).toBe("name")
    expect(result.username).toBe("username")
    expect(result.id).toBe(1)
  })
})