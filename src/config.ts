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
        content: "View the Launcher's soruce code on GitHub",
        href: "https://github.com/Fairy-Jeux/CreateAcademyLauncher",
        target: "_blank"
    }
} satisfies Record<string, LinkItem | LinkItem[] | Record<string, LinkItem[]>>

export interface LinkItem extends AnchorHTMLAttributes {
    content: string
    href: string
}

export interface TextRecord {
    [key: string]: string | TextRecord
}
