// /store/Menus.js
import { defineStore } from "pinia";

export const useMenus = defineStore("menus", {
  state: () => {
    return {
      menus: [],
      menu: {},
    };
  },

  getters: {
    getMenus: (state) => state.menus,
  },

  actions: {
    async fetchMenus() {
      let { data, error } = await useSupabaseClient()
        .from("menus")
        .select("id,name, items, categories")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching menus:", error);
        return;
      }

      this.menus = data;
    },

    async addMenu(menu) {
      let { data, error } = await useSupabaseClient()
        .from("menus")
        .insert([menu])
        .select("id,name")
        .single();

      if (error) {
        console.error("Error adding menu:", error);
        return;
      }

      this.menus.unshift(data);
    },

    async updateMenu(menu) {
      let { data, error } = await useSupabaseClient()
        .from("menus")
        .update(menu)
        .eq("id", menu.id)
        .select("id,name")
        .single();

      if (error) {
        console.error("Error updating menu:", error);
        return;
      }

      const index = this.menus.findIndex((m) => m.id === menu.id);
      if (index !== -1) {
        this.menus[index] = data;
      }
    },

    async deleteMenu(id) {
      let { error } = await useSupabaseClient()
        .from("menus")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting menu:", error);
        return;
      }

      const index = this.menus.findIndex((m) => m.id === id);
      if (index !== -1) {
        this.menus.splice(index, 1);
      }
    },

    async fetchMenu(menu) {
      const  [{data :categories}, {data :items}] = await Promise.all([
        useSupabaseClient()
          .from("categories")
          .select("*")
          .in("id", menu.categories),
        useSupabaseClient()
          .from("items")
          .select("*")
          .in("id", menu.items)
      ])
      this.menu = { ...menu, categories, items };

    }
  },
});
