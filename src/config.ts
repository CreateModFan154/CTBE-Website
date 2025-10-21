import type { AnchorHTMLAttributes } from "vue"
import type { PlatformName } from "./utils"

// *==* CONFIG

export const COPYRIGHT_YEAR = "2024-2025"
export const COPYRIGHT_NAME = "CreateModFan12"

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
