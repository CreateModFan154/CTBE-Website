import type { AnchorHTMLAttributes } from "vue"
import type { PlatformName } from "./utils"

// *==* CONFIG

export const launcherRepository = "Fairy-Jeux/CreateAcademyLauncher"
export const launcherRepositoryUrl = `https://github.com/${launcherRepository}`

export const launcherReleasesUrl = `${launcherRepositoryUrl}/releases`
export const launcherDownloadBaseUrl = `${launcherReleasesUrl}/latest/download`

export const launcherArtifacts: Record<Exclude<PlatformName, "other">, LauncherArtifactConfig[]> = {
    Windows: [{ match: /win_x64\.exe$/, variant: "Installer" }],
    Linux: [
        { match: /linux_arm64\.AppImage$/, variant: "AppImage (arm64)" },
        { match: /linux_x86_64\.AppImage$/, variant: "AppImage (x64)" }
    ],
    macOS: [
        { match: /mac_x64\.dmg$/, variant: "Intel" },
        { match: /mac_arm64\.dmg$/, variant: "M1/M2" }
    ]
}

export const links = {
    join: {
        content: "Join the Server",
        href: "#"
    },
    shop: {
        content: "Shop Cosmetics and More",
        href: "https://create-academy.tebex.io/",
        target: "_blank"
    },
    rules: {
        content: "Read the Server Rules",
        href: "https://createacademy.net/rules",
        target: "_blank"
    },
    social: [
        {
            content: "Discord",
            href: "https://discord.gg/SaQDPKcGwp",
            target: "_blank"
        },
        {
            content: "BlueSky",
            href: "https://bsky.app/profile/createacademy.net",
            target: "_blank"
        },
        {
            content: "YouTube",
            href: "https://www.youtube.com/channel/UCQlkADwPgtfBdl9XFWfrRVw",
            target: "_blank"
        }
    ],
    maps: [
        {
            content: "3D Live Map",
            href: "http://createacademy.net:8100/",
            target: "_blank"
        },
        {
            content: "Live Train Map",
            href: "http://createacademy.net:3876/",
            target: "_blank"
        }
    ],
    launcherOtherDownload: {
        content: "Download",
        href: `${launcherReleasesUrl}/latest`
    },
    launcherAllDownloads: {
        content: "Download for other platforms",
        href: `${launcherReleasesUrl}/latest`
    },
    launcherSource: {
        content: "View the Launcher's source code on GitHub",
        href: launcherRepositoryUrl,
        target: "_blank"
    },
    modpackCurseForge: {
        content: "CurseForge",
        href: "https://www.curseforge.com/minecraft/modpacks/create-academy",
        target: "_blank"
    },
    modpackModrinth: {
        content: "Modrinth",
        href: "https://modrinth.com/modpack/create-academy",
        target: "_blank"
    }
} satisfies Record<string, LinkItem | LinkItem[] | Record<string, LinkItem[]>>

export const galleryItems = [
    {
        type: "video",
        src: "https://createacademy.net/gallery/CA_Trailer.mp4",
        alt: "Create Academy Trailer",
        thumbnail: {
            src: "https://createacademy.net/gallery/CA_Trailer.jpg",
            alt: "Create Academy Trailer Thumbnail"
        }
    },
    {
        type: "video",
        src: "https://createacademy.net/gallery/CA_Monthly_Seasons_Showcase.mp4",
        alt: "Monthly Seasons Showcase",
        thumbnail: {
            src: "https://createacademy.net/gallery/CA_Monthly_Seasons_Showcase.jpg",
            alt: "Monthly Seasons Showcase Thumbnail"
        }
    },
    {
        type: "video",
        src: "https://createacademy.net/gallery/CA_Cosmetics_Reveal.mp4",
        alt: "Cosmetics Reveal",
        thumbnail: {
            src: "https://createacademy.net/gallery/CA_Cosmetics_Reveal.jpg",
            alt: "Cosmetics Reveal Thumbnail"
        }
    },
    {
        type: "video",
        src: "https://createacademy.net/gallery/CA_Consumables_Reveal.mp4",
        alt: "Consumables Reveal",
        thumbnail: {
            src: "https://createacademy.net/gallery/CA_Consumables_Reveal.jpg",
            alt: "Consumables Reveal Thumbnail"
        }
    },
    {
        type: "video",
        src: "https://createacademy.net/gallery/CA_shop_reveal.mp4",
        alt: "Shop Reveal",
        thumbnail: {
            src: "https://createacademy.net/gallery/CA_shop_reveal.jpg",
            alt: "Shop Reveal Thumbnail"
        }
    },
    {
        type: "video",
        src: "https://createacademy.net/gallery/Create_Academy.mp4",
        alt: "Create Academy Teaser Trailer",
        thumbnail: {
            src: "https://createacademy.net/gallery/Create_Academy.jpg",
            alt: "Create Academy Teaser Trailer Thumbnail"
        }
    },
    {
        type: "image",
        src: "https://createacademy.net/gallery/spoil_date.webp",
        alt: "Launch Date"
    },
    {
        type: "image",
        src: "https://createacademy.net/gallery/spoil_image1.webp",
        alt: "Teaser Image 1"
    }
] satisfies GalleryItem[]

// *==* CONFIG TYPES

export interface LinkItem extends Pick<AnchorHTMLAttributes, "target"> {
    content: string
    href: string
}

export interface TextRecord {
    [key: string]: string | TextRecord
}

export interface LauncherArtifactConfig {
    match: RegExp
    variant: string
}

export interface ReleasesResult {
    assets: Array<{
        name: string
        browser_download_url: string
    }>
}

export interface GalleryMediaItem<TType extends string> {
    type: TType
    src: string
    alt: string
}

export interface GalleryImageItem extends GalleryMediaItem<"image"> {
    thumbnail?: string
}

export interface GalleryVideoItem extends GalleryMediaItem<"video"> {
    thumbnail: Omit<GalleryImageItem, "type">
}

export type GalleryItem = GalleryVideoItem | GalleryImageItem
