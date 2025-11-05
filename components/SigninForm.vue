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
      <v-form>
        <v-row>

          <v-col cols="12">
            <v-text-field 
            label="ชื่อผู้ใช้" 
            variant="outlined" 
            >
            </v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field 
            type="password"
            label="รหัสผ่าน" 
            variant="outlined" 
            >
            </v-text-field>
          </v-col>

           <v-col cols="12" class="text-center">
            <v-btn
              label="เข้าสู่ระบบ"
              color="deep-purple-lighten-1"
              class="w-ms-100 w-md-75"
            >เข้าสู่ระบบ</v-btn>
          </v-col>

        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
  </div>
</template>
