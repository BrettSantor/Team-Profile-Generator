const Engineer = require("../lib/engineer")

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should return a new 'Engineer' object", () => {
            const pete = new Engineer();
         expect(pete instanceof Engineer).toEqual(true);
        })
        it('should return an object containing properties of "name", "id", "email" and "github" when called with the "new" keyword', () => {
            const pete = new Engineer();
         expect('name' in pete).toEqual(true);
         expect('id' in pete).toEqual(true);
         expect('email' in pete).toEqual(true);
         expect('github' in pete).toEqual(true);
        })
        it('should return an object containing methods of "getName", "getId", "getEmail" and "getRole" when called with the "new" keyword', () => {
            const pete = new Engineer();
         expect('getName' in pete).toEqual(true);
          expect('getId' in pete).toEqual(true);
         expect('getEmail' in pete).toEqual(true);
         expect('getGithub' in pete).toEqual(true);
         expect('getRole' in pete).toEqual(true);
        })
    })
    describe('getName', () => {
        it('should return the value of the name property', () => {
            const Pete = new Engineer('pete', 32, 'email');
            const nameTest = Pete.getName()
            expect(nameTest).toEqual('pete')
        })
    })
    describe('getId', () => {
        it('should return the value of the id property', () => {
            const Pete = new Engineer('name', 2, 'email');
            const idTest = Pete.getId()
            expect(idTest).toEqual(2)
        })
    })
    describe('getEmail', () => {
        it('should return the value of the email property', () => {
            const Pete = new Engineer('pete', 2, 'test@yahoo.old');
            const emailTest = Pete.getEmail()
            expect(emailTest).toEqual('test@yahoo.old')
        })
    })
    describe('getGithub', () => {
        it('should return the value of the github property', () => {
            const Pete = new Engineer('pete', 2, 'pete.com', "peteTheCat");
            const githubTest = Pete.getGithub()
            expect(githubTest).toEqual('peteTheCat')
        })
    })
    describe('getRole', () => {
        it('should return the value of the role property', () => {
            const Pete = new Engineer('pete', 2, 'pete.com');
            expect(Pete.getRole()).toEqual('Engineer')
        })
    })
})