<template>

        
  <v-container class="d-flex flex-column gap-4">
    <v-sheet color="gray-darken-2" >
      <v-text-field  v-model="firstName" type="string" placeholder="First Name">
      </v-text-field>
           <v-text-field
  prepend-icon="mdi-AccountCircle"
  v-model="lastName"
  label="Last Name"
  variant="outlined"
  color="indigo"
  placeholder="Last Name"
/>
         <v-text-field
  v-model="email"
  label="Email"
  variant="solo-filled"
  color="indigo"
  placeholder="Email"
/>
<v-text-field
            label="Solo"
            placeholder="Placeholder"
            variant="solo"
          ></v-text-field>

      <v-text-field v-model="password" type="password" placeholder="Password">
      </v-text-field>
      <v-text-field outline dense shaped v-model="confirmPassword" type="password" placeholder="Confirm Password">
      </v-text-field>
      <v-btn flat color="green"  @click="formSubmit()">Submit</v-btn>
     


    <v-snackbar
      v-model="show"
      location="bottom right"
      color="red"
      timeout="3000"
    >
  {{ message}}

      <template #actions>
        <v-btn size="small" variant="text" @click="show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </v-sheet>
    <!-- <v-alert color="primary" variant="tonal" closable v-model="tonal" >
      Tonal Alert
    </v-alert>

    <v-alert color="success" variant="outlined" closable>
      Outlined Alert
    </v-alert>

    <v-alert color="warning" variant="plain" closable>
      Plain Alert
    </v-alert>

    <v-alert color="error" variant="text" closable>
      Text Alert
    </v-alert>

    <v-alert color="info" variant="elevated" closable>
      Elevated Alert
    </v-alert>
  </v-container>
  <v-btn @click="openTonal()">Open tonal</v-btn>

 <v-container>
    <v-btn color="primary" @click="show = true">Show Toast</v-btn>

    <v-snackbar
      v-model="show"
      location="bottom right"
      color="red"
      timeout="3000"
    >
      You are logged out

      <template #actions>
        <v-btn size="small" variant="text" @click="show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar> -->


  </v-container>
 
</template>

<script setup lang="ts">
import {ref} from "vue"
import { mdi } from "vuetify/iconsets/mdi-svg"
const show = ref(false)
const message = ref('')
const firstName= ref('')
const lastName = ref('')
const email = ref()
const password = ref('')
const confirmPassword = ref('')

const formSubmit = ()=>{
    if(firstName.value==""){
      show.value=true
      message.value ="First Name is not filled"
    }
    if(lastName.value==""){
        show.value=true
      message.value ="Last Name is not filled"
    }
    if(email.value==""){
       show.value=true
      message.value ="Email is not filled"
    }
    if(password.value!="" && confirmPassword.value!=""){
        if(password.value === confirmPassword.value){
      show.value=true
      message.value ="You have registered Successfully"
        }else{
      show.value=true
      message.value ="the password are different"
        }
    }
}

</script>
