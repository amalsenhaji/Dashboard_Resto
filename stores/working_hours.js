// /store/WorkingHours.js
import { defineStore } from "pinia";

export const useWorkingHours = defineStore("working_hours", {
  state: () => {
    return {
      workingHours: [],
      workingHour: {},
    };
  },

  getters: {
    getWorkingHours: (state) => state.workingHours,
  },

  actions: {
    async fetchWorkingHours() {
      const { data, error } = await useSupabaseClient()
        .from("working_hours")
        .select("id,name,hdays")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching working hours:", error);
        return;
      }

      this.workingHours = data;
    },

    async addWorkingHour(workingHour) {
      let { data, error } = await useSupabaseClient()
        .from("working_hours")
        .insert([workingHour])
        .select("id,name")
        .single();

      if (error) {
        console.error("Error adding working hour:", error);
        return;
      }

      this.workingHours.unshift(data);
    },

    async updateWorkingHour(workingHour) {
      let { data, error } = await useSupabaseClient()
        .from("working_hours")
        .update(workingHour)
        .eq("id", workingHour.id)
        .select("id,name")
        .single();

      if (error) {
        console.error("Error updating working hour:", error);
        return;
      }

      const index = this.workingHours.findIndex((wh) => wh.id === workingHour.id);
      if (index !== -1) {
        this.workingHours[index] = data;
      }
    },

    async deleteWorkingHour(id) {
      let { error } = await useSupabaseClient()
        .from("working_hours")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting working hour:", error);
        return;
      }

      const index = this.workingHours.findIndex((wh) => wh.id === id);
      if (index !== -1) {
        this.workingHours.splice(index, 1);
      }
    },
  },
});
