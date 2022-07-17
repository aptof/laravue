import type { Ref } from 'vue';
import type { AxiosResponse } from 'axios';

export function resetErrors(...args: Ref[]) {
  args.forEach((arg) => {
    arg.value = undefined;
  });
}

export function setErrors(
  response: AxiosResponse,
  ...args: { key: string; field: Ref }[]
) {
  const errors = response.data.errors;
  args.forEach((arg) => {
    if (arg.key in errors) {
      arg.field.value = errors[arg.key][0];
    }
  });
}
