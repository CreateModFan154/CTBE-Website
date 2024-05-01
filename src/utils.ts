export function scrollTo(target: string | HTMLElement | null) {
    if (typeof target === "string") {
        target = document.querySelector(target) as HTMLElement
    }

    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        })
        if (target.id) {
            const hash = `#${target.id}`
            if (window.location.hash !== hash) {
                history.pushState(null, "", hash)
            }
        }
    }
}

export function getPlatformName() {
    const platform = navigator.platform
    if (platform.includes("Win")) {
        return "Windows"
    } else if (platform.includes("Linux")) {
        return "Linux"
    } else if (platform.includes("Mac")) {
        return "macOS"
    } else {
        return "other"
    }
}
export type PlatformName = ReturnType<typeof getPlatformName>
