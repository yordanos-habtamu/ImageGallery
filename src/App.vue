<template>
  <v-app>
   <sidebar/>
    <v-main>
      <v-container>
       <card></card>
      </v-container>
    </v-main>
  </v-app>
</template>
 <script setup lang="ts">
 import sidebar from './components/sidebar.vue';
 import card from './components/card.vue'
</script>