import { DeepMap, FieldError } from "react-hook-form";

export function provideError<T>(
  errors: DeepMap<Record<string, any>, FieldError>,
  type: FieldError["type"],
  message: T
) {
  return (fieldName: string | number) => {
    return errors[fieldName]?.type === type ? message : undefined;
  };
}

export const provideRequiredError = (
  errors: DeepMap<Record<string, any>, FieldError>
) => provideError(errors, "required", "This field is required");
