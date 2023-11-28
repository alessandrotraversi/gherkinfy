// LIBS
import { setFileInfo, setTestInfo } from "../src/index";

// CONFIG
const FILE_INFO = setFileInfo({
  test: "UNIT",
  system: "INFRA",
  details: "TEST",
  file: "test.spec.ts",
});

const feature = "FEATURE: TEST";

describe(FILE_INFO, () => {
  let TEST_INFO;

  TEST_INFO = setTestInfo({
    feature,
    scenario: "Scenario 1",
    given: "abc",
    when: "def",
    then: "zxy",
  });
  it(TEST_INFO, () => {
    expect(true).toEqual(true);
  });
});
