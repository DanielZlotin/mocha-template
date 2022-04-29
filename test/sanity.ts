import { use, expect } from "chai";
import CBN from "chai-bn";
import BN from "bn.js";

use(CBN(BN)); // this adds .bignumber assertions

describe("sanity tests", async () => {
  it("should work with BigInt", async () => {
    expect(1 + 1).eq(2);
    expect(123456789123456789123456789123456789n + 1n).eq(BigInt("123456789123456789123456789123456790"));
  });

  it("bn.js", async () => {
    expect(new BN("123456789123456789123456789").addn(1)).bignumber.eq(new BN("123456789123456789123456790"));
  });
});
