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
            <img
                v-if="currentItem.type === 'image'"
                :src="currentItem.src"
                :alt="currentItem.alt"
            />
            <video
                v-else-if="currentItem.type === 'video'"
                muted
                controls
                preload="metadata"
                :key="currentItem.src"
            >
                <source :src="currentItem.src" :alt="currentItem.alt" />
            </video>

            <a
                class="media-gallery-control media-gallery-control-prev"
                href="#"
                v-if="currentIndex > 0"
                v-on:click.prevent="prevItem"
            >
                <img src="../assets/img/icon/chevron-left.svg" alt="Previous item" />
            </a>
            <a
                class="media-gallery-control media-gallery-control-next"
                href="#"
                v-if="currentIndex < items.length - 1"
                v-on:click.prevent="nextItem"
            >
                <img src="../assets/img/icon/chevron-right.svg" alt="Next item" />
            </a>
        </div>
        <div class="media-gallery-reel">
            <a
                v-for="(item, index) in items"
                href="#"
                class="gallery-media-reel-item"
                :key="index"
                :class="{ active: index === currentIndex }"
                :item-type="item.type"
                v-on:click.prevent="() => setCurrent(index)"
                ref="reelElements"
            >
                <img
                    v-if="item.type == 'image'"
                    class="media-gallery-thumbnail"
                    :src="item.thumbnail ?? item.src"
                    :alt="item.alt"
                />

                <div v-if="item.type == 'video'" class="media-gallery-thumbnail">
                    <img
                        src="../assets/img/icon/player-play.svg"
                        alt=""
                        class="media-gallery-thumbnail-icon"
                    />
                    <video preload="metadata" muted>
                        <source :src="item.src + '#t=' + item.thumbnail" :alt="item.alt" />
                    </video>
                </div>
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
        display: block;
        color: var(--color-fg-dark);
        background: rgba(255, 255, 255, 0.4);
        text-decoration: none;
        padding: 1rem 0.75em;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        > img {
            display: block;
            height: 1em;
        }

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
        position: relative;

        &.active {
            border-color: var(--color-primary);
        }

        > .media-gallery-thumbnail {
            height: 100%;

            > .media-gallery-thumbnail-icon {
                content: "";
                background-size: contain;
                background-origin: content-box;
                background-color: rgba(255, 255, 255, 0.4);
                height: 2em;
                width: 2em;
                position: absolute;
                top: 10px;
                left: 10px;
                padding: 10px;
                border-radius: 10px;
            }

            > video,
            img {
                height: 100%;
            }
        }
    }
}
</style>
