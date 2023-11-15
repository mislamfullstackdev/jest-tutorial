import { isZero } from "./isZero";

test("it returns true when 0", () => {
    const result = isZero(0);
    expect(result).toBe(true);
})

test("it returns false when 1", () => {
    const result = isZero(1);
    expect(result).toBe(false);
})