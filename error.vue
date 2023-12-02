<template>
    <NuxtLayout>
        <div class="wrapper">
            <h1>Ops!</h1>
            <p>404</p>
            <h3>This route doesn&apos;t exist.</h3>
            <h3>
                Return back to the
                <NuxtLink to="/">
                    homepage
                </NuxtLink>
            </h3>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    title: "Doggo - Page Not Found!",
    meta: [
        { name: 'description', content: "Wrong page route, return to homepage!" }
    ]
})
</script>

<style scoped>
.wrapper {
    padding: 5rem;
    text-align: center;
}

.wrapper>h1 {
    color: rgb(54, 120, 182);
    margin-bottom: 2rem;
}

.wrapper>p {
    font-size: 100px;
    color: lightblue;
}

.link {
    text-decoration: none;
    color: rgb(54, 120, 182);
}
</style>