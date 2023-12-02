<template>
    <div>
        <h2 class="heading">
            {{ "Results for " }}
            <span>{{ listingText.breed }}</span>
            <!--We avoid putting sub-breed text value in the heading if searched only by breed-->
            {{ listingText.subBreed !== "All" ? ", " : "" }}
            <span v-if="listingText.subBreed !== 'All'">{{ listingText.subBreed }}</span>
        </h2>
        <LoaderComponent :isLoading="isLoading" />
        <div class="imageWrapper">
            <img v-for="(image, index) in images" :alt="`dog-image-${index}`" :src="image" class="image" :key="image" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ListingText } from '~/types';
import LoaderComponent from '~/ui-kit/LoaderComponent.vue';

defineProps<{
    images: string[]
    isLoading: boolean
    listingText: ListingText
}>()
</script>

<style scoped>
.heading {
    margin-bottom: 1rem;
}

.heading>span {
    color: rgb(54, 120, 182);
}

.imageWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    width: 100%;
}

.image {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 15px;
    box-shadow: 10px 10px 5px gray;
    border: 10px solid lightblue;
    cursor: pointer;
    transition: 0.1s all ease-in-out;
}

.image:hover {
    opacity: 0.7;
}

/*bigger tablet*/
@media screen and (max-width: 950px) {
    .imageWrapper {
        gap: 30px;
    }

    .image {
        border: 7px solid lightblue;
    }
}

/*smaller tablet*/
@media screen and (max-width: 700px) {
    .imageWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .image {
        width: 70%;
        border: 10px solid lightblue;
    }
}

/*mobile*/
@media screen and (max-width: 500px) {
    .image {
        width: 80%
    }
}

/*smaller mobile*/
@media screen and (max-width: 350px) {
    .image {
        width: 90%
    }
}
</style>