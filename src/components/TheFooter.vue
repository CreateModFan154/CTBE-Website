<script setup lang="ts">
import { COPYRIGHT_NAME, COPYRIGHT_YEAR } from "@/config"
import { VERSION } from "@/package"
</script>

<template>
    <footer id="footer">
        <div class="container flex flex-spaced">
            <div id="footerLeft" class="flex-item text-left">
                <p id="footerCopyright">
                    &copy; {{ COPYRIGHT_YEAR }} {{ COPYRIGHT_NAME }}
                    <br />
                    All rights reserved
                </p>
            </div>
            <div id="footerRight" class="flex-item text-right">
                <p id="footerDesignedBy">
                    Designed and Developed by
                    <a href="createmodfan154.github.io" target="_blank">CreateModFan12</a>
                    Inspired by the Create Academy site
                    <br />
                    v{{ VERSION }} -
                    <a
                        href="https://github.com/CreateModFan154/CTBE-Website"
                        target="_blank"
                    >
                        View Site Source
                    </a>
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
#footer {
    position: relative;
    background-color: var(--color-footer-bg);
    color: var(--color-footer-fg);
    padding: 2rem 0;
    margin-top: 30px;
    box-shadow: 0 0 40px 40px var(--color-footer-bg);
}
</style>
