import { capitalise } from "./capitalise";

describe("capitalise", () => {
  it("should capitalise first letter of lowercase string", () => {
    const res = capitalise("testing");
    expect(res).toEqual("Testing");
  });
  it("should make all other letters lowercase", () => {
    const res = capitalise("TESTING");
    expect(res).toEqual("Testing");
  });
});
