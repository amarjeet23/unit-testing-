import { StrengthPipe } from "./strength.pipe";
describe("strengthPipe", () => {
  // importing pipe
  const pipe = new StrengthPipe();
  //
  it("it should return weak if value is less than 10", () => {
    expect(pipe.transform(5)).toEqual("5 (weak)");
  });
  it("it should return weak if value is greater 10 & less than 20", () => {
    expect(pipe.transform(10)).toEqual("10 (strong)");
  });
  it("it should return unbelievable if value is greater than 20 ", () => {
    expect(pipe.transform(30)).toEqual("30 (unbelievable)");
  });
});
