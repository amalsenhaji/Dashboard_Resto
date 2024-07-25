import { SupabaseClient } from "@supabase/supabase-js";
import { defineStore } from "pinia";
export const useBusiness = defineStore("business", {
  state: () => {
    return {
      business: null,
    };
  },

  getters: {
    getBusiness: (state) => state.business,
  },
  actions: {
    async fetchBusiness() {
      let { data, error } = await useSupabaseClient()
        .from("admins")
        .select("*, business:business_id(*)")
        .single();

      this.business = data.business;
    },
    async init() {
      if (!this.business) {
        await this.fetchBusiness();
      }
    },
    async signOut() {
      const { error } = await useSupabaseClient().auth.signOut();



    }
  },
});
