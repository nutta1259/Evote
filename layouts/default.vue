<template>
  <v-app id="dlayout">
    <v-app-bar
        color="deep-purple-lighten-3"
        image="https://images.nexusmods.com/images/games/v2/2861/hero.jpg"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(179, 157, 219, 0.5), rgba(69, 39, 160, .5)"
          ></v-img>
        </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <h2>ระบบเลือกตั้งออนไลน์</h2>
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <!--  -->
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
        to="/candidate"
      >
        <template v-slot:prepend>
          <v-icon class="fas fa-user"></v-icon>
        </template>

        <v-list-item-title class="font-weight-bold">
          รายชื่อผู้สมัคร
        </v-list-item-title>
      </v-list-item>
      <!-- third  -->
             <v-list-item
        color="primary"
        value=""
        to="/developer"
      >
        <template v-slot:prepend>
          <v-icon class="fas fa-code"></v-icon>
        </template>

        <v-list-item-title class="font-weight-bold">
          ผู้พัฒนา
        </v-list-item-title>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
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

