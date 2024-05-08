<script setup lang="ts"></script>

<template>
    <footer id="footer">
        <div class="container flex flex-spaced">
            <div id="footerLeft" class="flex-item text-left">
                <p id="footerCopyright">&copy; 2024 - All rights reserved</p>
            </div>
            <div id="footerRight" class="flex-item text-right">
                <p id="footerDesignedBy">
                    Designed and Developed by
                    <a href="http://cynical.business" target="_blank">CynicalBusiness</a>
                    <br />
                    <a
                        href="https://lab.vevox.io/code/games/minecraft/create-academy-website"
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
