import type { AnchorHTMLAttributes } from "vue"
import type { PlatformName } from "./utils"

export const links = {
    join: {
        content: "Join the Server",
        href: "#"
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
                href: ""
            }
        ],
        Linux: [
            {
                content: "Download (.deb)",
                href: ""
            },
            {
                content: "Download (.rpm)",
                href: ""
            }
        ],
        macOS: [
            {
                content: "Download for macOS",
                href: ""
            }
        ],
        other: [
            // default when no OS is matched
            {
                content: "Download",
                href: ""
            }
        ]
    } satisfies Record<PlatformName, LinkItem[]>,
    launcherAllDownloads: {
        content: "Download for other platforms",
        href: ""
    }
} satisfies Record<string, LinkItem | LinkItem[] | Record<string, LinkItem[]>>

export interface LinkItem extends AnchorHTMLAttributes {
    content: string
    href: string
}

export interface TextRecord {
    [key: string]: string | TextRecord
}
