<template>
  <h2 class="heading">
    {{ "Results for " }}
    <span>{{ listingText.breed }}</span>
    <!--We avoid putting sub-breed text value in the heading if searched only by breed-->
    {{ listingText.subBreed !== "All" ? ", " : "" }}
    <span v-if="listingText.subBreed !== 'All'">{{
      listingText.subBreed
    }}</span>
  </h2>
  <LoaderComponent :isLoading="isLoading" />
  <v-container>
    <v-row no-gutters justify="center">
      <template v-for="(image, index) in images">
        <v-hover v-slot="{ isHovering, props }">
          <v-col
            :key="index"
            cols="12"
            sm="6"
            md="4"
            class="my-2"
            v-bind="props"
          >
            <v-sheet :class="['sheet', 'mx-2', isHovering && 'elevation-16']">
              <img
                :alt="`dog-image-${index}`"
                :src="image"
                class="image"
                :key="image"
              />
            </v-sheet>
          </v-col>
        </v-hover>
      </template>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { ListingText } from "~/types";
import LoaderComponent from "~/ui-kit/LoaderComponent.vue";

defineProps<{
  images: string[];
  isLoading: boolean;
  listingText: ListingText;
}>();
</script>

<style scoped>
.heading > span {
  color: rgb(54, 120, 182);
}

.sheet {
  border: 10px solid lightblue;
  transition: 0.1s all ease-in-out;
  height: 100%;
}

.sheet:hover {
  opacity: 0.8;
}

.image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
}
</style>
