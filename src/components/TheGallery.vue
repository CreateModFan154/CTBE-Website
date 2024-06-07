<script setup lang="ts">
import { galleryItems } from "../config"
import MediaGallery from "./MediaGallery.vue"
</script>

<template>
    <section id="gallery">
        <div class="container text-center">
            <h1>Gallery</h1>
            <div id="galleryMedia">
                <MediaGallery v-bind:items="galleryItems" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
#galleryMedia {
    background: var(--color-bg-transparent);
}
</style>
