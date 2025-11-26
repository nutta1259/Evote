<template>
  <div>
    
      <v-card
    class="mx-auto my-8"
    elevation="16"
    max-width="500"
  >
    <v-card-item class="bg-deep-purple-lighten-1">
      <v-card-title class="font-weight-bold pa-3">
        <v-icon class="fas fa-right-to-bracket" mr-2></v-icon>
        เข้าสู่ระบบ
      </v-card-title>
    </v-card-item>

    <v-card-text class="pa-8">
      <v-form
        ref="form"
        @submit.prevent="login" 
      >
        <v-row>

          <v-col cols="12" md="12" class="mx-auto">
            <v-text-field 
            v-model="user.userName"
            label="ชื่อผู้ใช้" 
            variant="outlined" 
            :rules="[
              v => !!v || 'กรุณากรอกข้อมูล'
            ]"
            >
            </v-text-field>
          </v-col>

          <v-col cols="12" md="12" class="mx-auto">
            <v-text-field 
            v-model="user.userPass"
            type="password"
            label="รหัสผ่าน" 
            variant="outlined" 
            :rules="[
              () => !!user.userPass || 'กรุณากรอกข้อมูล'
            ]"
            >
            </v-text-field>
          </v-col>

           <v-col cols="12" class="text-center">
            <v-btn
              type="submit"
              color="green-darken-1"
              class="w-ms-100 w-md-50"
            >เข้าสู่ระบบ</v-btn>
          </v-col>

        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
  </div>
</template>

<script setup>
const props = defineProps({
  loginType: {
    type: String,
    default: null

  }
})

const form = ref(null)

let user = ref({
  userName:'',
  userPass:''
})

onMounted(async()=>{
  form.value.resetValidation()
  await $fetch('/api/user').then((users)=>{
    console.log(users)
  })
})

async function login() {

  const { valid } = await form.value.validate()
  if (valid) {

  }
}
</script>