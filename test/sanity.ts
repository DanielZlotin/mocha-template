import { expect } from "chai";

describe("sanity tests", async () => {
  it("should work with BigInt", async () => {
    expect(1 + 1).eq(2);
    expect(123456789123456789123456789123456789n + 1n).eq(BigInt("123456789123456789123456789123456790"));
  });
});
