const Manager = require("../lib/manager")

describe('Manager', () => {
    describe('Initialization', () => {
        it("should return a new 'Manager' object", () => {
            const pete = new Manager();
         expect(pete instanceof Manager).toEqual(true);
        })
        it('should return an object containing properties of "name", "id", "email" and "officeNumber" when called with the "new" keyword', () => {
            const pete = new Manager();
         expect('name' in pete).toEqual(true);
         expect('id' in pete).toEqual(true);
         expect('email' in pete).toEqual(true);
         expect('officeNumber' in pete).toEqual(true);
        })
        it('should return an object containing methods of "getName", "getId", "getEmail" and "getRole" when called with the "new" keyword', () => {
            const pete = new Manager();
         expect('getName' in pete).toEqual(true);
          expect('getId' in pete).toEqual(true);
         expect('getEmail' in pete).toEqual(true);
         expect('getRole' in pete).toEqual(true);
        })
    })
    describe('getName', () => {
        it('should return the value of the name property', () => {
            const Pete = new Manager('pete', 87, 'email');
            const nameTest = Pete.getName()
            expect(nameTest).toEqual('pete')
        })
    })
    describe('getId', () => {
        it('should return the value of the id property', () => {
            const Pete = new Manager('name', 2, 'email');
            const idTest = Pete.getId()
            expect(idTest).toEqual(2)
        })
    })
    describe('getEmail', () => {
        it('should return the value of the email property', () => {
            const Pete = new Manager('name', 786, 'test@yahoo.old');
            const emailTest = Pete.getEmail()
            expect(emailTest).toEqual('test@yahoo.old')
        })
    })
    describe('getRole', () => {
        it('should return the value of the role property', () => {
            const Pete = new Manager('name', 'id', 'email');
            expect(Pete.getRole()).toEqual('Manager')
        })
    })
})