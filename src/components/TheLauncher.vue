<script setup lang="ts">
import { links } from "../config"
import { getPlatformName } from "../utils"

const platformName = getPlatformName()
const launcherDownloadLinks = links.launcherDownloads[platformName]
</script>

<template>
    <section id="launcher">
        <div class="container text-center">
            <h1>Join The Academy</h1>
            <h3 class="subtitle">Be on the server in under 5 minutes.</h3>
            <div id="launcherDownloadArea">
                <div class="flex flex-row flex-spaced">
                    <a
                        v-for="(link, index) in launcherDownloadLinks"
                        v-bind:key="index"
                        v-bind="link"
                        class="button button-primary button-large flex-item"
                        >{{ link.content }}</a
                    >
                </div>
                <p v-if="platformName !== 'other'">
                    Detected as {{ platformName }} -
                    <a v-bind="links.launcherAllDownloads">{{
                        links.launcherAllDownloads.content
                    }}</a>
                </p>
            </div>
            <div id="launcherQuickGuide">
                <div class="item">
                    <h2>Download</h2>
                    <div class="img-container">
                        <img src="../assets/img/ca-launcher-1.png" alt="Download the launcher" />
                    </div>
                    <p>Download and install our custom Create Academy Launcher</p>
                </div>
                <div class="item">
                    <h2>Connect</h2>
                    <div class="img-container">
                        <img src="../assets/img/ca-launcher-2.png" alt="Connect Account" />
                    </div>
                    <p>Connect your Microsoft or Mojang account that owns Minecraft</p>
                </div>
                <div class="item">
                    <h2>Play!</h2>
                    <div class="img-container">
                        <img src="../assets/img/ca-launcher-3.png" alt="Play!" />
                    </div>
                    <p>Launch the game and join The Create Academy!</p>
                </div>
            </div>

            <div id="launcherWhy">
                <h3>Why use a custom launcher?</h3>
                <p>Create Academy uses a custom launcher to make life easier for everyone!</p>
                <div class="flex flex-row flex-spaced">
                    <div class="flex-item">
                        <h3>Easy Updates</h3>
                        <p>
                            Immediately recieve the latest content without any effort on your part.
                            Everything downloads automatically!
                        </p>
                    </div>
                    <div class="flex-item">
                        <h3>Faster Maintenance<br /></h3>
                        <p>
                            No more multi-day-long approval processes for updates. We can push new
                            fixes and features in seconds.
                        </p>
                    </div>
                    <div class="flex-item">
                        <h3>Improved Safety</h3>
                        <p>
                            With full content control, we can make sure all content is safe and
                            secure for you. No more sneaky tainted mods!
                        </p>
                    </div>
                </div>
                <p>
                    <a v-bind="links.launcherSource">{{ links.launcherSource.content }}</a>
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
#launcher {
    min-height: 100vh;
}

#launcherQuickGuide {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 20px;
}
#launcherQuickGuide > .item {
    flex: 1 1 200px;
    text-align: center;
}
#launcherQuickGuide > .item > .img-container {
    display: block;
    max-width: 100%;
    padding: 10px;
    background-color: rgb(255, 255, 255, 0.2);
    border: var(--button-border) var(--color-primary) solid;
    box-shadow: 0 0 var(--button-border) 0 var(--color-primary-dark) inset;
    position: relative;
}
#launcherQuickGuide > .item > .img-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: var(--button-border) var(--color-primary-inactive) solid;
}
#launcherQuickGuide > .item > .img-container > img {
    max-width: 100%;
    max-height: 100%;
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
}
</style>
