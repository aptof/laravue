import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

function isNotUser(config: AxiosRequestConfig) {
  console.log(config.url);
  if(config.url?.endsWith('/api/user')) return false;
  return true;
}

export function useErrorInterceptor() {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if(!error.response.request.responseURL.endsWith('/api/user')){
        toast.error(`${error.response.status}: ${error.response.statusText}`);
      }
      return Promise.reject(error);
    }
  );
}
