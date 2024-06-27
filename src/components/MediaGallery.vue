<script setup lang="ts">
import { computed, ref } from "vue"
import type { GalleryItem } from "../config"

const { items } = defineProps<{
    items: GalleryItem[]
}>()

const reelElements = ref<HTMLElement[]>([])
const currentIndex = ref(0)
const currentItem = computed(() => items[currentIndex.value])

function setCurrent(index: number) {
    currentIndex.value = Math.max(0, Math.min(items.length - 1, index))
    reelElements.value[currentIndex.value]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    })
}

function nextItem() {
    setCurrent(currentIndex.value + 1)
}

function prevItem() {
    setCurrent(currentIndex.value - 1)
}
</script>

<template>
    <div class="media-gallery">
        <div class="media-gallery-current-item">
            <img v-if="currentItem.type === 'image'" v-bind="currentItem.media" />
            <video
                v-else-if="currentItem.type === 'video'"
                muted
                controls
                v-bind="currentItem.media"
                v-bind:key="currentItem.source.src"
            >
                <source v-bind="currentItem.source" />
            </video>

            <a
                class="media-gallery-control media-gallery-control-prev"
                href="#"
                v-if="currentIndex > 0"
                v-on:click.prevent="prevItem"
            >
                &lt;
            </a>
            <a
                class="media-gallery-control media-gallery-control-next"
                href="#"
                v-if="currentIndex < items.length - 1"
                v-on:click.prevent="nextItem"
            >
                &gt;
            </a>
        </div>
        <div class="media-gallery-reel">
            <a
                v-for="(item, index) in items"
                href="#"
                class="gallery-media-reel-item"
                v-bind:key="index"
                v-bind:class="{ active: index === currentIndex }"
                v-on:click.prevent="() => setCurrent(index)"
                ref="reelElements"
            >
                <img v-bind="item.thumbnail" />
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.media-gallery-current-item {
    margin: 0 auto;
    width: 100%;
    max-height: 70vh;
    aspect-ratio: 16 / 9;
    position: relative;

    > img,
    video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center center;
    }

    > .media-gallery-control {
        color: var(--color-fg-dark);
        background: rgba(255, 255, 255, 0.4);
        text-decoration: none;
        padding: 1rem 0.75em;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &.media-gallery-control-prev {
            left: 0;
        }

        &.media-gallery-control-next {
            right: 0;
        }
    }
}

.media-gallery-reel {
    display: flex;
    height: 10vh;
    max-height: 150px;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    column-gap: 1em;
    align-items: stretch;
    padding-top: 0.5em;

    > .gallery-media-reel-item {
        display: inline-block;
        border: var(--button-border) var(--color-default) solid;
        flex: 0 0 auto;

        &.active {
            border-color: var(--color-primary);
        }

        > img {
            height: 100%;
        }
    }
}
</style>
