const Employee = require("../lib/employee");

test("Can create a new instance of an employee", () => {
    const employee = new Employee
    expect(typeof(employee)).toBe("object")
});

test("Can set employee name via input", () => {
    const name = "Audrey";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set employee id via input", () => {
    const id = 150;
    const employee = new Employee("Audrey", id);
    expect(employee.id).toBe(id);
});

test("Can set email employee email via input", () => {
    const email = "fake@test.com";
    const employee = new Employee("Audrey", 150, email);
    expect(employee.email).toBe(email);
  });

  test("Can get name via getName()", () => {
    const testValue = "Audrey";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
  });

  test("Can get id via getId()", () => {
    const testValue = 150;
    const employee = new Employee("Audrey", testValue);
    expect(employee.getId()).toBe(testValue);
  });

  test("Can get email via getEmail()", () => {
    const testValue = "fake@test.com";
    const employee = new Employee("Audrey", 150, testValue);
    expect(employee.getEmail()).toBe(testValue);
  })

  test('getRole() should return "Employee"', () => {
    const testValue = "Employee";
    const employee = new Employee("Audrey", 150, "fake@test.com");
    expect(employee.getRole()).toBe(testValue);
  });