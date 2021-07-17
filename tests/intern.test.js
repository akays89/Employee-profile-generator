const Intern = require("../lib/intern")

test("Can set school via input", () => {
  const testValue = "WashU";
  const employee = new Intern("Audrey", 150, "fake@test.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "WashU";
  const employee = new Intern("Audrey", 150, "fake@test.com", testValue);
  expect(employee.getSchool()).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const employee = new Intern("Audrey", 150, "faket@test.com", "WashU");
  expect(employee.getRole()).toBe(testValue);
});