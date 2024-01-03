/* eslint-disable @typescript-eslint/restrict-template-expressions */

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

  function setThenVal(then: string | string[]): string | string[] {
    const init = `${"\n"}          `;

    if (typeof then === "string") {
      return `${init}${GherkingEnums.THEN} ${then}`;
    }

    return then.map(
      (then: string): string => `${init}${GherkingEnums.THEN} ${then}`,
    );
  }

  const FEATURE = `${GherkingEnums.FEATURE}: ${feature}`;
  const SCENARIO = `${GherkingEnums.SCENARIO}: ${scenario}`;
  const GIVEN = `${GherkingEnums.GIVEN} ${given}`;
  const WHEN = `${GherkingEnums.WHEN} ${when}`;
  const THEN = setThenVal(then);

  return `${FEATURE}
        ${SCENARIO}
          ${GIVEN},
          ${WHEN},${THEN}`;
};

export const _scenario = (callback: any): void => callback();
export const _given = (callback: any): void => callback();
export const _when = (callback: any): void => callback();
export const _then = (callback: any): void => callback();
