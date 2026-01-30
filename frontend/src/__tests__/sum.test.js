import { sum } from "../utils/sum"


test("testcase is for two calcialte sum of two",() => {
    const result = sum(3,4);

    expect(result).toBe(7);
})