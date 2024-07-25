// /store/Locations.js
import { defineStore } from "pinia";

export const useLocations = defineStore("locations", {
  state: () => {
    return {
      locations: [],
      location: {},
    };
  },

  getters: {
    getLocations: (state) => state.locations,
  },

  actions: {
    async fetchLocations() {
      let { data, error } = await useSupabaseClient()
        .from("locations")
        .select("id,name")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching locations:", error);
        return;
      }

      this.locations = data;
    },

    async addLocation(location) {
      let { data, error } = await useSupabaseClient()
        .from("locations") 
        .insert([location])
        .select("id,name")
        .single();

      if (error) {
        console.error("Error adding location:", error);
        return;
      }

      this.locations.unshift(data);
    },

    async updateLocation(location) {
      let { data, error } = await useSupabaseClient()
        .from("locations")
        .update(location)
        .eq("id", location.id)
        .select("id,name")
        .single();

      if (error) {
        console.error("Error updating location:", error);
        return;
      }

      const index = this.locations.findIndex((l) => l.id === location.id);
      if (index !== -1) {
        this.locations[index] = data;
      }
    },

    async deleteLocation(id) {
      let { error } = await useSupabaseClient()
        .from("locations")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting location:", error);
        return;
      }

      const index = this.locations.findIndex((l) => l.id === id);
      if (index !== -1) {
        this.locations.splice(index, 1);
      }
    },
  },
});
