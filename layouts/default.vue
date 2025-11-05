<template>
  <v-app id="dlayout">
    <v-app-bar
        color="deep-purple-lighten-3"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(179, 157, 219, 1), rgba(69, 39, 160, .5)"
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
        <v-list density="compact">
      <v-list-subheader>REPORTS</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
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

