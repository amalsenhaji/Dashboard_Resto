// /store/Merchants.js
import { defineStore } from "pinia";

export const useMerchants = defineStore("merchants", {
  state: () => {
    return {
      merchants: [],
    };
  },

  getters: {
    getMerchants: (state) => state.merchants,
  },

  actions: {
    async fetchMerchants() {
      let { data, error } = await useSupabaseClient()
        .from("merchants")
        .select("id,name, items, categories")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching merchants:", error);
        return;
      }

      this.merchants = data;
    },

    async addMerchant(merchant) {
      let { data, error } = await useSupabaseClient()
        .from("merchants")
        .insert([merchant])
        .select("id,name")
        .single();

      if (error) {
        console.error("Error adding merchant:", error);
        return;
      }

      this.merchants.unshift(data);
    },

    async updateMerchant(merchant) {
      let { data, error } = await useSupabaseClient()
        .from("merchants")
        .update(merchant)
        .eq("id", merchant.id)
        .select("id,name")
        .single();

      if (error) {
        console.error("Error updating merchant:", error);
        return;
      }

      const index = this.merchants.findIndex((m) => m.id === merchant.id);
      if (index !== -1) {
        this.merchants[index] = data;
      }
    },

    async deleteMerchant(id) {
      let { error } = await useSupabaseClient()
        .from("merchants")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting merchant:", error);
        return;
      }

      const index = this.merchants.findIndex((m) => m.id === id);
      if (index !== -1) {
        this.merchants.splice(index, 1);
      }
    },
  },
});
