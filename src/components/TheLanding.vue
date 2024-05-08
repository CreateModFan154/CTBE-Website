<script setup lang="ts">
import { links } from "../config"
import { scrollTo } from "../utils"
import ThemeButton from "./ThemeButton.vue"

function onJoinClick(e: MouseEvent) {
    e.preventDefault()
    scrollTo("#launcher")
}
</script>

<template>
    <header id="landing">
        <div id="landingBackground" />

        <div id="landingContent" class="container">
            <section id="landingLogo">
                <img src="../assets/calogo.png" alt="CA Logo" />
            </section>

            <section id="landingCTA">
                <h1>SMP Minecraft powered up with Create</h1>
                <h3 class="subtitle">
                    Work together to make industrial automation, fantastical contraptions, and even
                    <em>trains</em>!
                </h3>

                <div class="flex flex-row">
                    <ThemeButton
                        id="launcherButton"
                        v-bind="links.join"
                        class="button-primary button-large button-expanded flex-item"
                        @click="onJoinClick"
                    >
                        {{ links.join.content }}
                    </ThemeButton>
                </div>
            </section>

            <section id="landingMenu">
                <div><h2>Join the Community</h2></div>
                <div><h2>View the World</h2></div>

                <!-- Social Buttons -->
                <div class="flex flex-row flex-spaced">
                    <ThemeButton
                        v-for="(link, index) in links.social"
                        v-bind:key="index"
                        v-bind="link"
                        type="button"
                        class="button button-primary flex-item"
                    >
                        {{ link.content }}
                    </ThemeButton>
                </div>

                <!-- Map Buttons -->
                <div class="flex flex-row flex-spaced">
                    <ThemeButton
                        v-for="(link, index) in links.maps"
                        v-bind:key="index"
                        v-bind="link"
                        type="button"
                        class="button button-primary flex-item"
                    >
                        {{ link.content }}
                    </ThemeButton>
                </div>
            </section>
        </div>
    </header>
</template>

<style scoped>
#landing {
    min-height: 100vh;
    padding-bottom: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
    font-family: var(--font-mc);
}

#landingBackground {
    width: 100%;

    position: absolute;
    top: 0;
    bottom: -10vh;
    left: 0;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vh), 0 100%);

    background-color: #999;
    background-image: url("../assets/landing.png");
    background-position: center;
    background-size: cover;
    background-blend-mode: multiply;
}

#landingLogo > img {
    margin: 0 auto;
    max-height: 20vh;
    max-width: 100%;
    display: block;
}

#landingMenu {
    column-gap: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
}
</style>
