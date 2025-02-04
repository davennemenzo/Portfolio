<template>
  <v-container :class="computedClass" fluid>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageContainer",
  computed: {
    computedClass() {
      const { xs, sm, md, lg } = this.$vuetify.breakpoint;
      if (xs) return "pa-2"; // Small padding for mobile
      if (sm) return "pa-4"; // Medium padding for tablet
      if (md) return "pa-6"; // Larger padding for laptops
      if (lg) return "pa-8"; // Largest padding for desktops
      return "pa-10"; // Default for extra-large screens
    },
  },
};
</script>
