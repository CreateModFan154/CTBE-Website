import type { AnchorHTMLAttributes } from 'vue'

export const text = {
  header: {
    title: 'SMP Minecraft powered up with Create',
    subtitle:
      'Work together to make industrial automation, fantastical contraptions, and even <em>trains</em>!'
  }
} satisfies TextRecord

export const links = {
  join: {
    content: 'Join the Server',
    href: '#', // TODO launcher download link
    target: '_blank'
  },
  social: [
    {
      content: 'Discord',
      href: 'https://discord.gg/SaQDPKcGwp',
      target: '_blank'
    },
    {
      content: 'Twitter',
      href: 'https://x.com/CreateAcademyMC',
      target: '_blank'
    },
    {
      content: 'YouTube',
      href: 'https://www.youtube.com/channel/UCQlkADwPgtfBdl9XFWfrRVw',
      target: '_blank'
    }
  ],
  maps: [
    {
      content: '3D DynMap',
      href: 'http://94.23.44.138:8100/', // TODO not hard-coded IP
      target: '_blank'
    },
    {
      content: 'Live Train Map',
      href: 'http://94.23.44.138:3876/', // TODO not hard-coded IP
      target: '_blank'
    }
  ]
} satisfies Record<string, LinkItem | LinkItem[]>

export interface LinkItem extends AnchorHTMLAttributes {
  content: string
  href: string
}

export interface TextRecord {
  [key: string]: string | TextRecord
}
