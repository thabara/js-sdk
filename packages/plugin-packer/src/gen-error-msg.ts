import type { ErrorObject } from "ajv";
import type { EnumError } from "ajv/dist/vocabularies/validation/enum";

export const generateErrorMessages = (errors: ErrorObject[]): string[] => {
  return errors.map((e) => {
    if (e.keyword === "enum") {
      return `"${e.instancePath}" ${e.message} (${(
        e as EnumError
      ).params.allowedValues
        .map((v) => `"${v}"`)
        .join(", ")})`;
    }
    return `"${e.instancePath}" ${e.message}`;
  });
};
