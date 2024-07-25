import { defineStore } from "pinia";
export const useCategories = defineStore("categories", {
  state: () => {
    return {
      categories: [],
    };
  },

  getters: {
    getCategories: (state) => state.categories,
  },
  actions: {
    async fetchCategories() {
      let { data, error } = await useSupabaseClient()
        .from("categories")
        .select("*, clients(id, name, code),sellers(name, sector)")
        .order("created_at", { ascending: false });

      this.orders = data;
    },
    async addOrder(order) {
      let { data } = await useSupabaseClient()
        .from("orders")
        .select("*, clients(id, name, code),sellers(name, sector)")
        .eq("id", order.id)
        .single();
      this.orders.unshift(data);
      await this.addOrderItems(data.id)
    },
    async updateOrder(order) {
      const index = this.orders.findIndex((o) => o.id === order.id);
      this.orders[index] = {
        ...this.orders[index],
        total: order.total,
        palier: order.palier,
      };
      await this.updateOrderItems(order.id)
    },
    deleteOrder(id) {
      const index = this.orders.findIndex((o) => o.id === id);
      this.orders.splice(index, 1);
      this.deleteOrderItems(id)
    },
    async fetchItems() {
      let { data } = await useSupabaseClient().from("orderItems").select(`
                    order_id, quantity, price,
                    item(name, category)
                `);
      this.items = data;
    },
    async addOrderItems(id) {
      let { data } = await useSupabaseClient().from("orderItems").select(`
                order_id, quantity, price,
                item(name, category)
            `)
        .eq("order_id", id)
      this.items = this.items.concat(data);
    },
    async updateOrderItems(id) {
      let { data } = await useSupabaseClient().from("orderItems").select(`
              order_id, quantity, price,
              item(name, category)
          `)
        .eq("order_id", id)
      this.items = this.items.filter((i) => i.order_id !== id).concat(data)
    },
    deleteOrderItems(id) {
      this.items = this.items.filter((i) => i.order_id !== id);
    },
    async fetchWinners() {
      let { data, error } = await useSupabaseClient()
        .from("winners")
        .select("*, winner(name, id)");
      this.winners = data;
    },
    async addWinner(winner) {
      let { data, error } = await useSupabaseClient()
        .from("winners")
        .insert([winner])
        .select('*, winner(name, id)')
        .single();
      console.log(data);
      this.winners.push(data)
    },
    listenToOrders() {
      const ordersChannel = useSupabaseClient().channel('custom-all-channel')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'orders' },
          async (payload) => {
              console.log('orderItems', payload);
              switch (payload.eventType) {
                case 'INSERT':
                  await this.addOrder(payload.new)
                  break
                case 'UPDATE':
                  this.updateOrder(payload.new)
                  break
                case 'DELETE':
                  this.deleteOrder(payload.old.id)
                  break
              }
          }
        )
        .subscribe()
    },
    async init() {
      await this.fetchOrders();
      await this.fetchItems();
      await this.fetchWinners();
      this.listenToOrders();
    },
  },
});
