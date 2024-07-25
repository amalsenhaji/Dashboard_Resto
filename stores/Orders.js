import { defineStore } from "pinia";

export const useOrders = defineStore("orders", {
  state: () => {
    return {
      orders: [],
    };
  },

  getters: {
    getOrders: (state) => state.orders,
    getOrderById: (state) => (id) => state.orders.find(order => order.id === id),
  },

  actions: {
    async fetchOrders() {
      let { data, error } = await useSupabaseClient()
        .from("orders")
        .select("*, locations(*)")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching orders:", error);
        return;
      }

      this.orders = data;
    },
  },
});
