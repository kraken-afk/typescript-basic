describe("Array", (): void => {
  it ("Should has array values", (): void => {
    const names: string[] = ["Romeo", "Saskia", "Kyoto"];
    const numbers: number[] = [1, 2, 3];

    expect(names.length).toBe(3);
    expect(Array.isArray(numbers)).toBeTruthy();
  });
});