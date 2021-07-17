const Manager = require("../lib/manager");

test("Can set office number via input", () => {
  const testValue = 200;
  const employee = new Manager("Audrey", 150, "fake@test.com", testValue);
  expect(employee.officeNumber).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 200;
  const employee = new Manager("Audrey", 150, "fake@test.com", testValue);
  expect(employee.getOfficeNumber()).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const employee = new Manager("Audrey", 150, "fake@test.com", 200);
  expect(employee.getRole()).toBe(testValue);
})