import { getLangPair } from "./getLangPair";

describe("getLangPair", () => {
  it("should return esTr if languages are spanish and turkish", () => {
    const res = getLangPair("spanish", "turkish");
    expect(res).toEqual("esTr");
  });
  it("should also return esTr if languages are in different order", () => {
    const res = getLangPair("turkish", "spanish");
    expect(res).toEqual("esTr");
  });
});
