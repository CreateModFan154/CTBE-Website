import type { AnchorHTMLAttributes } from "vue"

// *==* CONFIG

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
    ]
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

export interface LinkItem extends AnchorHTMLAttributes {
    content: string
    href: string
}

export interface TextRecord {
    [key: string]: string | TextRecord
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
