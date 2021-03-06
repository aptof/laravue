import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      email: '',
      name: ''
    }
  },
  getters: {
    isLoggedIn: (state) => {
      if(state.email == '' || state.email == undefined) {
        return false;
      } else return true;
    }
  },
  actions: {
    setUser(email: string, name: string) {
      this.email = email,
      this.name = name
    },
    reset() {
      this.email = '';
      this.name = '';
    }
  }
})