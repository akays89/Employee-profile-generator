const Engineer = require("../lib/engineer");

test("Can set GitHUb account via input", () => {
    const testValue = "GithubUser";
    const employee = new Engineer("Audrey", 150, "fake@test.com", testValue);
    expect(employee.github).toBe(testValue);
  });

  test("Can get GitHub username via getGithub()", () => {
    const testValue = "GithubUser";
    const employee = new Engineer("Audrey", 150, "fake@test.com", testValue);
    expect(employee.getGithub()).toBe(testValue);
  });

  test('getRole() should return "Engineer"', () => {
    const testValue = "Engineer";
    const employee = new Engineer("Audrey", 150, "fake@test.com", "GitHubUser");
    expect(employee.getRole()).toBe(testValue);
  });