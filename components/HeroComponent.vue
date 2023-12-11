<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
    :class="['mt-10', $vuetify.display.smAndDown && 'flex-column-reverse']"
  >
    <v-col cols="8" md="4" :align="$vuetify.display.sm ? 'center' : 'start'"
      ><h2>
        Welcome to <span>Doggo</span>
        <br />
        Experience the dog research as never before
      </h2></v-col
    >
    <v-col
      cols="8"
      md="4"
      :align="$vuetify.display.smAndDown ? 'center' : 'end'"
      ><img src="/hero-dog.png" alt="dog image"
    /></v-col>
  </v-row>
</template>

<style scoped>
h2 {
  font-size: 36px;
  flex: 1;
}

img {
  width: 250px;
  height: 300px;
}

h2 > span {
  color: rgb(54, 120, 182);
  font-size: 46px;
  font-weight: bolder;
}
</style>
