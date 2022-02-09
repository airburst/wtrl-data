import { makeFilename } from "./utils";

describe("Excel service utils", () => {
  describe("Make file name for export", () => {
    it("Correclty sets a filename for a numeric input", () => {
      expect(makeFilename(531)).toEqual("Results-Stage-1.xlsx");
      expect(makeFilename(538)).toEqual("Results-Stage-8.xlsx");
    });

    it("Handles a string input", () => {
      expect(makeFilename("TEST")).toEqual("Results-Stage-NaN.xlsx");
    });
  });
});
