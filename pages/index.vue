<template>
  <div>

      <v-container>
    <v-row>
      <v-col
        v-for="item in menu"
        :key="item.name"
        cols="12"
        sm="6"
      >
        <div class="menu-card">
          <img :src="item.image" class="menu-image" />

          <div class="menu-text">
            <h3>{{ item.name }}</h3>
            <p>ราคา {{ item.price }}฿</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <slot />
  </div>
</template>

<style scoped>
.menu-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 18px;
}

.menu-text h3 {
  font-size: 20px;
  margin: 0;
}

.menu-text p {
  margin: 0;
  color: gray;
  font-size: 14px;
}
</style>


<script setup>
const menu = [
  {
    name: 'กาแฟ',
    price: 35,
    image: 'https://www.gourmetandcuisine.com/Images/editor_upload/_editor20210712013308_original.jpg',
  },
  {
    name: 'คาปูชิโน่',
    price: 35,
    image: 'https://www.nespresso.com/ecom/medias/sys_master/public/45936680796190/shutterstock-1074209732-1024x683.jpg',
  },
  {
    name: 'ลาเต้',
    price: 35,
    image: 'https://www.sgethai.com/wp-content/uploads/2023/05/AnyConv.com__85-3.webp',
  },
  {
    name: 'โกโก้',
    price: 35,
    image: 'https://img.pikbest.com/ai/illus_our/20230423/741ce62b487ac3b905763fe37d502c3b.jpg!w700wp',
  },
]
</script>
