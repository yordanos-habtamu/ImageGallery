<template>
  <v-container class="d-flex justify-center align-center mt-8" >
    <v-card 
      variant="elevated"
      class="pa-6 elevation-6"
      width="600"
    >
      <template v-slot:title>
        <span class="font-weight-black">Welcome to Photo Gallery</span>
      </template>
      
      <v-col cols="12">
        <v-row>
          <v-text-field
            v-model="email"
            label="Email"
            prepend-icon="mdi-email"
            variant="outlined"
            color="green"
            placeholder="Enter your email"
          />
        </v-row>

        <v-row>
          <v-text-field
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            variant="outlined"
            color="green"
            type="password"
            placeholder="Enter your password"
          />
        </v-row>

        <v-btn class="mt-4" @click="formSubmit" color="green">
          Login
        </v-btn>
      </v-col>
    </v-card>

   
    <v-snackbar
      v-model="showSnackbar"
      :color="color"
      location="bottom right"
      timeout="3000"
    >
      {{ message }}

      <template #actions>
        <v-btn size="small" variant="text" @click="showSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const color = ref("red"); // default
const showSnackbar = ref(false);
const message = ref("");

const formSubmit = () => {
  if (email.value && password.value) {
    message.value = "You are successfully logged in!";
    color.value = "success";
    showSnackbar.value = true;

    setTimeout(() => {
      router.push("/");
    }, 1000);
  } else {
    message.value = "Email and password are required!";
    color.value = "error";
    showSnackbar.value = true;
  }
};
</script>
