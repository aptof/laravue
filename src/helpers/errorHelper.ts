import type { Ref } from 'vue';
import { type AxiosResponse, AxiosError } from 'axios';

export function resetErrors(...args: Ref[]) {
  args.forEach((arg) => {
    arg.value = undefined;
  });
}

function setAllErrors(
  response: AxiosResponse,
  ...args: { key: string; field: Ref }[]
) {
  const errors = response.data.errors;
  args.forEach((arg) => {
    if (arg.key in errors) {
      setSingleError(errors[arg.key], arg.field);
    }
  });
}

function setSingleError(error: string[], field: Ref<any>) {
  field.value  = error[0];
}

export function setErrors(
  error: any,
  ...args: { key: string; field: Ref }[]
) {
  if(error instanceof AxiosError ) {
    const response = error.response;
    if(response?.status == 422) {
      setAllErrors(response, ...args);
    }
  }
}