// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/supabase', '@pinia/nuxt', "@nuxt/ui"],

  imports: {
    dirs: ["./stores"],
  },

  nuxtUi: {
    theme: {
      primary: '#E10A23',
    },
  },

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  supabase: {
    url:'https://serv.restohub.us',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5peWhoZHFocmFsdGRva2J1dHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5ODEzMDgsImV4cCI6MjAwMTU1NzMwOH0.wyZDXtXLOB1avR9yF0KWny1TOU-euED_N6yek9pDG28'
  },

  compatibilityDate: '2024-07-18',
})