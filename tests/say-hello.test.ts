import { sayHello } from "../src/say-hello";


describe("say-hello", (): void => {
  const result = sayHello("Romeo");

  it("Should return type of string", (): void => {
    expect(typeof result).toBe("string");
  });
  it("Should return value of 'Hello Romeo'", (): void => {
    expect(result).toBe("Hello Romeo");
  });
});