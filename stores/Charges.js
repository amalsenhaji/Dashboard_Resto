import { defineStore } from "pinia";

export const useCharges = defineStore("charges", {
  state: () => ({
    charges: [],
  }),

  getters: {
    getCharges: (state) => state.charges,
  },

  actions: {
    async fetchCharges() {
      let { data, error } = await useSupabaseClient()
        .from("charges")
        .select("*")
        .order("created_at", { ascending: false });

      this.charges = data;
    },
  },
});
