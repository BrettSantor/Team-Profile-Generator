const Intern = require("../lib/intern")

describe('Intern', () => {
    describe('Initialization', () => {
        it("should return a new 'Intern' object", () => {
            const pete = new Intern();
         expect(pete instanceof Intern).toEqual(true);
        })
        it('should return an object containing properties of "name", "id", "email" and "School" when called with the "new" keyword', () => {
            const pete = new Intern();
         expect('name' in pete).toEqual(true);
         expect('id' in pete).toEqual(true);
         expect('email' in pete).toEqual(true);
         expect('school' in pete).toEqual(true);
        })
        it('should return an object containing methods of "getName", "getId", "getEmail", "getSchool and "getRole" when called with the "new" keyword', () => {
            const pete = new Intern();
         expect('getName' in pete).toEqual(true);
          expect('getId' in pete).toEqual(true);
         expect('getEmail' in pete).toEqual(true);
         expect('getSchool' in pete).toEqual(true);
         expect('getRole' in pete).toEqual(true);
        })
    })
    describe('getName', () => {
        it('should return the value of the name property', () => {
            const Pete = new Intern('pete', 5, 'email');
            const nameTest = Pete.getName()
            expect(nameTest).toEqual('pete')
        })
    })
    describe('getId', () => {
        it('should return the value of the id property', () => {
            const Pete = new Intern('name', 2, 'email');
            const idTest = Pete.getId()
            expect(idTest).toEqual(2)
        })
    })
    describe('getEmail', () => {
        it('should return the value of the email property', () => {
            const Pete = new Intern('name', 5, 'test@yahoo.old');
            const emailTest = Pete.getEmail()
            expect(emailTest).toEqual('test@yahoo.old')
        })
    })
    describe('getSchool', () => {
        it('should return the value of the School property', () => {
            const Pete = new Intern('name', 5, 'email', "Berkley");
            const schoolTest = Pete.getSchool()
            expect(schoolTest).toEqual('Berkley')
        })
    })
    describe('getRole', () => {
        it('should return the value of the role property', () => {
            const Pete = new Intern('name', 5, 'email');
            expect(Pete.getRole()).toEqual('Intern')
        })
    })
})