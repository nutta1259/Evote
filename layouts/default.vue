<template>
  <v-app id="dlayout">
      <!--  
    <v-app-bar
        v-show="$vuetify.display.smAndDown"
      >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>
        <p style="font-family: Brush Script MT;font-size: 50px;margin: 20px;color:#7d7658;">Momo Cafe</p>
      </v-app-bar-title>
    </v-app-bar>
-->
    <v-navigation-drawer
       v-model="drawer"
       permanent
       width="280"
       
    >
    
    <img src="/image/logo.png" alt="" height="95px" width="275px" style="margin: 3px;margin-top: 20px;">

        <v-list class="mt-3" nav>
      <!-- first  -->
      <v-list-item
        color="primary"
        value=""
        to="/"
      >
        <template v-slot:prepend>
          <v-icon class="fas fa-home"></v-icon>
        </template>

        <v-list-item-title class="font-weight-bold">
          หน้าหลัก
        </v-list-item-title>
      </v-list-item>
      <!-- second  -->
      <v-list-item
        color="primary"
        value=""
        to="/search"
      >
        <template v-slot:prepend>
          <v-icon class="fa-solid fa-magnifying-glass"></v-icon>
        </template>

        <v-list-item-title class="font-weight-bold">
          ค้นหา
        </v-list-item-title>
      </v-list-item>
      <!-- third  -->
             <v-list-item
        color="primary"
        value=""
        to="/contact"
      >
        <template v-slot:prepend>
          <v-icon class="fa-regular fa-envelope"></v-icon>
        </template>

        <v-list-item-title class="font-weight-bold">
          ติดต่อร้าน
        </v-list-item-title>
      </v-list-item>
      <!-- fouth  -->
      <v-list-item
        color="primary"
        value=""
        to="/online"
      >
        <template v-slot:prepend>
          <v-icon class="fa-solid fa-basket-shopping"></v-icon>
        </template>

        <v-list-item-title class="font-weight-bold">
          สั่งออนไลน์
        </v-list-item-title>
      </v-list-item>
      <!-- fifth  -->
      <v-list-item
        color="primary"
        value=""
        to="/login"
      >
        <template v-slot:prepend>
          <v-icon class="fa-solid fa-arrow-right-to-bracket"></v-icon>
        </template>

        <v-list-item-title class="font-weight-bold">
          เข้าสู่ระบบ
        </v-list-item-title>
      </v-list-item>

      <i class="fa-brands fa-square-facebook" style="font-size: 21px;"></i>
      <i class="fa-brands fa-instagram fa-1x" style="font-size: 21px;"></i>
      <i class="fa-brands fa-square-x-twitter fa-1x" style="font-size: 20px;"></i>
      <i class="fa-solid fa-share-nodes" style="font-size: 19px;"></i>
      <div>
        <i class="fa-solid fa-phone"></i>
        09x-xxx-xxxx
      </div>
      
    </v-list>
    </v-navigation-drawer>

    <v-main class="bg-white">
              <v-container>
                    <slot />
              </v-container>

    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
    const items = [
    { text: 'Real-Time', icon: 'mdi-clock' },
    { text: 'Audience', icon: 'mdi-account' },
    { text: 'Conversions', icon: 'mdi-flag' },
  ]
</script>

