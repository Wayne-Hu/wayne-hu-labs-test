import { convertToString } from "./numberConvertor";
describe("number convertor", () => {
  it("should convert 0", () => {
    const words = convertToString(0);
    expect(words).toBe("Zero");
  });

  it("should convert 101", () => {
    const words = convertToString(101);
    expect(words).toBe("One Hundred One");
  });

  it("should convert 121", () => {
    const words = convertToString(121);
    expect(words).toBe("One Hundred Twenty One");
  });

  it("should convert 1211", () => {
    const words = convertToString(1211);
    expect(words).toBe("One Thousand Two Hundred Eleven");
  });

  it("should convert 9999", () => {
    const words = convertToString(9999);
    expect(words).toBe("Nine Thousand Nine Hundred Ninety Nine");
  });

  it("should convert 99990", () => {
    const words = convertToString(99990);
    expect(words).toBe("Ninety Nine Thousand Nine Hundred Ninety Zero");
  });

  it("should convert 34251", () => {
    const words = convertToString(34251);
    expect(words).toBe("Thirty Four Thousand Two Hundred Fifty One");
  });
});
