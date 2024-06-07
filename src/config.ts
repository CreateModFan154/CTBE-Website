import type {
    AnchorHTMLAttributes,
    ImgHTMLAttributes,
    SourceHTMLAttributes,
    VideoHTMLAttributes
} from "vue"
import type { PlatformName } from "./utils"

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
    ],
    maps: [
        {
            content: "3D DynMap",
            href: "http://94.23.44.138:8100/", // TODO not hard-coded IP
            target: "_blank"
        },
        {
            content: "Live Train Map",
            href: "http://94.23.44.138:3876/", // TODO not hard-coded IP
            target: "_blank"
        }
    ],
    launcherDownloads: {
        // TODO set up these downloads
        Windows: [
            {
                content: "Download for Windows",
                href: "https://github.com/Fairy-Jeux/CreateAcademyLauncher/releases/latest/download/Create.Academy.Launcher-setup.exe"
            }
        ],
        Linux: [
            {
                content: "Download for Linux (AppImage)",
                href: "https://github.com/Fairy-Jeux/CreateAcademyLauncher/releases/latest/download/Create.Academy.Launcher-setup.AppImage"
            }
        ],
        macOS: [
            {
                content: "Download for macOS\n(x64 for Intel)",
                href: "https://github.com/Fairy-Jeux/CreateAcademyLauncher/releases/latest/download/Create.Academy.Launcher-setup-x64.dmg"
            },
            {
                content: "Download for macOS\n(arm64 for M1/M2)",
                href: "https://github.com/Fairy-Jeux/CreateAcademyLauncher/releases/latest/download/Create.Academy.Launcher-setup-arm64.dmg"
            }
        ],
        other: [
            // default when no OS is matched
            {
                content: "Download Now",
                href: "https://github.com/Fairy-Jeux/CreateAcademyLauncher/releases/latest"
            }
        ]
    } satisfies Record<PlatformName, LinkItem[]>,
    launcherAllDownloads: {
        content: "Download for other platforms",
        href: "https://github.com/Fairy-Jeux/CreateAcademyLauncher/releases/latest"
    },
    launcherSource: {
        content: "View the Launcher's source code on GitHub",
        href: "https://github.com/Fairy-Jeux/CreateAcademyLauncher",
        target: "_blank"
    }
} satisfies Record<string, LinkItem | LinkItem[] | Record<string, LinkItem[]>>

export const galleryItems = [
    {
        type: "video",
        media: {
            autoplay: true
        },
        source: {
            src: "https://cdn.discordapp.com/attachments/1151388720860237890/1247988188421820516/Create_Academy.mp4?ex=66640152&is=6662afd2&hm=cd951a8d2d05b9c3e7887f7bff60dc60a6bb5066830b7c9fb5a1d31adb2785f1&"
        },
        thumbnail: {
            src: "https://cdn.discordapp.com/attachments/1151388720860237890/1151389042999570462/image-85.png?ex=6663ec1b&is=66629a9b&hm=50991fba111f79ff846fa0eb6bd996f063a6a40ba89ffcadcb46fad3a8144af0&",
            alt: "Teaser Trailer"
        }
    },
    {
        type: "image",
        media: {
            src: "https://cdn.discordapp.com/attachments/1151388720860237890/1230128896515506176/3spoil.png?ex=66644acf&is=6662f94f&hm=4c487b04e2897fbccb6f99d2b456e823c387324e723e95780986e65a919a6d0b&",
            alt: "Teaser 2"
        },
        thumbnail: {
            src: "https://cdn.discordapp.com/attachments/1151388720860237890/1230128896515506176/3spoil.png?ex=66644acf&is=6662f94f&hm=4c487b04e2897fbccb6f99d2b456e823c387324e723e95780986e65a919a6d0b&",
            alt: "Teaser 2"
        }
    },
    {
        type: "image",
        media: {
            src: "https://cdn.discordapp.com/attachments/1151388720860237890/1206245159889805313/image-72.png?ex=66646a59&is=666318d9&hm=98ecb02daefa7345850ff664839c069a014c7997847ab97eaa838ff7fc96e713&",
            alt: "Teaser 3"
        },
        thumbnail: {
            src: "https://cdn.discordapp.com/attachments/1151388720860237890/1206245159889805313/image-72.png?ex=66646a59&is=666318d9&hm=98ecb02daefa7345850ff664839c069a014c7997847ab97eaa838ff7fc96e713&",
            alt: "Teaser 3"
        }
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

export interface GalleryMediaItem<TType extends string, TMedia> {
    type: TType
    media: TMedia
    thumbnail: ImgHTMLAttributes
}

export interface GalleryImageItem extends GalleryMediaItem<"image", ImgHTMLAttributes> {
    //
}

export interface GalleryVideoItem extends GalleryMediaItem<"video", VideoHTMLAttributes> {
    source: SourceHTMLAttributes
}

export type GalleryItem = GalleryVideoItem | GalleryImageItem
