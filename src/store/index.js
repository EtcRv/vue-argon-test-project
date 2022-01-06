import { createStore } from "vuex";

const store = createStore({
  state: {
    accounts: [],
  },
  getters: {
    accountsData: (state) => {
      return state.accounts;
    },
  },
  mutations: {},
  actions: {
    async getAccountsDataFromAPI() {
      try {
        let response = await fetch(
          "https://fir-project-vue-default-rtdb.asia-southeast1.firebasedatabase.app/Accounts.json"
        );
        let datas = await response.json();
        const keys = Object.keys(datas);
        keys.forEach((key) => {
          this.state.accounts.push(datas[key]);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

export default store;
