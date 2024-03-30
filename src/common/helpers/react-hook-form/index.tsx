import {FieldValues, Path, UseFormRegister, UseFormReturn, useFormState} from 'react-hook-form';

type ExtractFieldValues<F> = F extends UseFormReturn<infer U> ? U : never;

export function useErrorMessageFromForm<
  F extends UseFormReturn<any>,
  FV extends FieldValues = ExtractFieldValues<F>
>(form: F, key: Path<FV>) {
  const {errors} = useFormState({control: form.control, name: key});
  return errors?.[key]?.message?.toString();
}

export function useRegisterWithErrorMessage<
  F extends UseFormReturn<any>,
  FV extends FieldValues = ExtractFieldValues<F>
>(
  form: F,
  key: Path<FV>
): ReturnType<UseFormRegister<FV>> & {
  errorMessage: string | undefined;
} {
  return Object.assign(form.register(key as Path<FV>), {
    errorMessage: useErrorMessageFromForm(form, key)
  });
}
