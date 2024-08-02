<script setup lang="ts">
import { ref } from "vue"
import {
    launcherArtifacts,
    launcherRepository,
    links,
    type LinkItem,
    type ReleasesResult
} from "../config"
import { getPlatformName } from "../utils"
import ThemeButton from "./ThemeButton.vue"

async function getLauncherDownloads(): Promise<LinkItem[]> {
    const platformName = getPlatformName()

    if (platformName === "other") {
        return []
    }

    const releasesResponse = await fetch(
        `https://api.github.com/repos/${launcherRepository}/releases/latest`,
        {
            redirect: "follow"
        }
    )
    const releases = (await releasesResponse.json()) as ReleasesResult
    console.log("Got launcher releases:", releases)

    const artifactConfigs = launcherArtifacts[platformName]
    if (!artifactConfigs || !artifactConfigs.length) {
        return []
    }

    let downloadLinks: LinkItem[] = []

    for (const artifactConfig of artifactConfigs) {
        const asset = releases.assets.find((asset) => asset.name.endsWith(artifactConfig.suffix))
        if (!asset) {
            console.warn("No asset found for artifact config", artifactConfig)
            continue
        }

        downloadLinks.push({
            content: `Download for ${platformName} (${artifactConfig.variant})`,
            href: asset.browser_download_url
        })
    }

    return downloadLinks
}

const launcherDownloadLinks = ref<LinkItem[] | null>(null)
getLauncherDownloads()
    .catch((error) => {
        console.warn("Failed to load launcher manifest, showing default download link", error)
        return [links.launcherOtherDownload]
    })
    .then((links) => {
        launcherDownloadLinks.value = links
    })
</script>

<template>
    <section id="launcher">
        <div class="container text-center">
            <h1>Join The Academy</h1>
            <h3 class="subtitle">Be on the server in under 5 minutes.</h3>
            <div id="launcherDownloadArea">
                <div v-if="launcherDownloadLinks?.length" class="flex flex-row flex-spaced">
                    <ThemeButton
                        v-for="(link, index) in launcherDownloadLinks"
                        v-bind:key="index"
                        v-bind="link"
                        class="button button-primary button-large flex-item"
                    >
                        {{ link.content }}
                    </ThemeButton>
                </div>
                <div v-else class="flex flex-row flex-spaced">
                    <ThemeButton
                        v-bind="links.launcherOtherDownload"
                        class="button button-primary button-large flex-item"
                    >
                        {{ links.launcherOtherDownload.content }}
                    </ThemeButton>
                </div>

                <p>
                    <a v-bind="links.launcherAllDownloads">
                        {{ links.launcherAllDownloads.content }}
                    </a>
                </p>
            </div>
            <div id="launcherQuickGuide">
                <div class="item">
                    <h2>Download</h2>
                    <div class="img-container">
                        <img src="../assets/img/ca-launcher-1.png" alt="Download the launcher" />
                    </div>
                    <p>Download and install the launcher</p>
                </div>
                <div class="item">
                    <h2>Connect</h2>
                    <div class="img-container">
                        <img src="../assets/img/ca-launcher-2.png" alt="Connect Account" />
                    </div>
                    <p>Connect your Minecraft account</p>
                </div>
                <div class="item">
                    <h2>Play!</h2>
                    <div class="img-container">
                        <img src="../assets/img/ca-launcher-3.png" alt="Play!" />
                    </div>
                    <p>Join The Create Academy!</p>
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
    background-color: rgb(0, 0, 0);
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
