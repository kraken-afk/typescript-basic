
describe("Primitive data types", (): void => {
  it("Should contains primitive data types", (): void => {
    let name: string = "Romeo Noveanre";
    const age: number = 18;
    const isHuman: boolean = true;

    expect(typeof name).toBe("string");
    expect(typeof age).toBe("number");
    expect(typeof isHuman).toBeTruthy();
  });
});