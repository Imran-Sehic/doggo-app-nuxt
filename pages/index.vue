<template>
    <HeroComponent />
    <div class="wrapper">
        <DashboardComponent :breeds="breeds" @update:dogs="setDogsImages" @update:listing-text="setListingText"
            @update:loading="setIsLoading" />
        <ListingComponent :images="dogs" :listingText="listingText" :isLoading="isLoading" />
    </div>
</template>

<script setup lang="ts">
import { fetchBreeds, fetchDogsByBreedAndSubBreed } from "~/composables/queries";
import { type Breeds, type ListingText } from "~/types";

useHead({
    title: "Doggo - Explore the dog's world!",
    meta: [
        { name: 'description', content: "Doggo home page, explore the biggest dog's database in one application!" }
    ]
})

const breedsResponse = await fetchBreeds();
const breeds = ref<Breeds>(breedsResponse.value.message as Breeds);

const dogsResponse = await fetchDogsByBreedAndSubBreed(Object.keys(breeds.value)[0], "All");
const dogs = ref<string[]>(dogsResponse.value.message as string[]);

const listingText = ref<ListingText>({
    breed: Object.keys(breeds.value)[0],
    subBreed: "All"
});

const isLoading = ref<boolean>(false);

const setDogsImages = (images: string[]) => {
    dogs.value = images;
}

const setIsLoading = (loading: boolean) => {
    isLoading.value = loading;
}

const setListingText = (text: ListingText) => {
    listingText.value = text;
}
</script>

<style scoped>
.wrapper {
    margin: 8rem;
}

/*smaller desktop*/
@media screen and (max-width: 1150px) {
    .wrapper {
        margin: 5rem
    }
}

/*smaller tablet*/
@media screen and (max-width: 600px) {
    .wrapper {
        margin: 3rem;
    }
}

/*mobile*/
@media screen and (max-width: 500px) {
    .wrapper {
        margin: 1rem;
    }
}
</style>