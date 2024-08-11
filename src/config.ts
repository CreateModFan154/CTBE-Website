import type { AnchorHTMLAttributes } from "vue"
import type { PlatformName } from "./utils"

// *==* CONFIG

export const launcherRepository = "Fairy-Jeux/CreateAcademyLauncher"
export const launcherRepositoryUrl = `https://github.com/${launcherRepository}`

export const launcherReleasesUrl = `${launcherRepositoryUrl}/releases`
export const launcherDownloadBaseUrl = `${launcherReleasesUrl}/latest/download`

export const launcherArtifacts: Record<Exclude<PlatformName, "other">, LauncherArtifactConfig[]> = {
    Windows: [{ suffix: ".exe", variant: "Installer" }],
    Linux: [{ suffix: ".AppImage", variant: "AppImage" }],
    macOS: [
        { suffix: "x64.dmg", variant: "Intel" },
        { suffix: "arm64.dmg", variant: "M1/M2" }
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
            content: "Twitter",
            href: "https://x.com/CreateAcademyMC",
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
            content: "3D DynMap",
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
    }
} satisfies Record<string, LinkItem | LinkItem[] | Record<string, LinkItem[]>>

export const galleryItems = [
    {
        type: "video",
        src: "https://createacademy.net/gallery/Create_Academy.mp4",
        alt: "Create Academy Teaser Trailer",
        thumbnail: 5
    },
    {
        type: "video",
        src: "https://createacademy.net/gallery/CA_shop_reveal.mp4",
        alt: "Shop Reveal"
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
    suffix: string
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
    thumbnail?: number
}

export type GalleryItem = GalleryVideoItem | GalleryImageItem
