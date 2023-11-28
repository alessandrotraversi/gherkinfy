// ENUMS
export enum GherkingEnums {
  FEATURE = "FEATURE",
  SCENARIO = "SCENARIO",
  GIVEN = "GIVEN",
  WHEN = "WHEN",
  THEN = "THEN",
}

// TYPES
export type TestOptions =
  | "UNIT"
  | "INTEGRATION"
  | "E2E"
  | "CONTRACT"
  | "COMPONENT";

export type ArchitectureOptions =
  | "INFRA"
  | "USECASE"
  | "DOMAIN"
  | "EVENT"
  | "APPLICATION"
  | "CORE";

export interface TestSuiteAttributes {
  test: TestOptions;
  system: ArchitectureOptions;
  details: string;
  file: string;
}

export interface GherkingOptions {
  feature?: string;
  scenario: string;
  given?: string;
  when: string;
  then: string | string[];
}

// METHODS
export const setFileInfo = (payload: TestSuiteAttributes): string => {
  const { system, details, file, test } = payload;

  const UpperCase = `[${test}][${system}][${details}]`.toUpperCase();

  return `${UpperCase}: ${file}`;
};

export const setTestInfo = (payload: GherkingOptions): string => {
  const { feature, given, scenario, when, then } = payload;

  const FEATURE = `${GherkingEnums.FEATURE}: ${feature}`;
  const SCENARIO = `${GherkingEnums.SCENARIO}: ${scenario}`;
  const GIVEN = `${GherkingEnums.GIVEN} ${given}`;
  const WHEN = `${GherkingEnums.WHEN} ${when}`;
  const THEN =
    typeof then === "string"
      ? `${GherkingEnums.THEN} ${then}`
      : `${GherkingEnums.THEN} ${then[0]}`;

  return `${FEATURE}
    ${SCENARIO}
      ${GIVEN},
      ${WHEN},
      ${THEN}`;
};
