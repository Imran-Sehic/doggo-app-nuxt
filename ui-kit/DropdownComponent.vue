<template>
  <div>
    <p class="dropdownHeading">
      {{ type === DropdownType.BREED ? "Breed" : "Sub-Breed" }}
    </p>
    <v-btn
      width="200"
      color="primary"
      variant="outlined"
      style="background-color: white"
    >
      {{ option }}
      <v-menu activator="parent" offset-y>
        <v-list max-height="300" class="pa-0">
          <template v-for="(item, index) in list" :key="index" :value="index">
            <v-hover v-slot="{ isHovering, props }">
              <v-list-item
                :elevation="isHovering ? 16 : 0"
                :class="{ 'on-hover': isHovering }"
                @click="option = item"
                v-bind="props"
              >
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-hover>
          </template>
        </v-list>
      </v-menu>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { DropdownType } from "@/types";
import { ref } from "vue";
defineProps<{
  list: string[];
  type: DropdownType;
}>();

const { option } = defineModels<{ option: string }>();
</script>

<style scoped>
::v-deep ::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
.on-hover {
  background: lightgray;
  transition: 0.3s;
}
.dropdownHeading {
  font-weight: bold;
  margin-bottom: 8px;
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}
</style>
