import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

export function useErrorInterceptor() {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      toast.error(error.response.statusText);
      if (error.response.status == 422) {
        return Promise.reject(error);
      }
    }
  );
}
