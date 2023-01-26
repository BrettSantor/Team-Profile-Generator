
const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('Initialization', () => {
        it("should return a new 'Employee' object", () => {
            const pete = new Employee();
         expect(pete instanceof Employee).toEqual(true);
        })
        it('should return an object containing properties of "name", "id" and "email" when called with the "new" keyword', () => {
            const pete = new Employee();
         expect('name' in pete).toEqual(true);
         expect('id' in pete).toEqual(true);
         expect('email' in pete).toEqual(true);
        })
        it('should return an object containing methods of "getName", "getId", "getEmail" and "getRole" when called with the "new" keyword', () => {
            const pete = new Employee();
         expect('getName' in pete).toEqual(true);
          expect('getId' in pete).toEqual(true);
         expect('getEmail' in pete).toEqual(true);
         expect('getRole' in pete).toEqual(true);
        })
    })
    describe('getName', () => {
        it('should return the value of the name property', () => {
            const Pete = new Employee('pete', id, email);
            const nameTest = Pete.getName(this.name)
            expect(nameTest).toEqual('pete')
        })
    })
    describe('getId', () => {
        it('should return the value of the id property', () => {
            const Pete = new Employee(name, 2, email);
            const idTest = Pete.getId(this.id)
            expect(idTest).toEqual(2)
        })
    })
    describe('getEmail', () => {
        it('should return the value of the email property', () => {
            const Pete = new Employee(name, id, 'test@yahoo.old');
            const emailTest = Pete.getEmail(this.email)
            expect(emailTest).toEqual('test@yahoo.old')
        })
    })
    describe('getRole', () => {
        it('should return the value of the role property', () => {
            const Pete = new Employee(name, id, email);
            expect(Pete.getRole()).toEqual('Employee')
        })
    })
})