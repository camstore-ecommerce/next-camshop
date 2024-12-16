import ELink from '@/enum/link.enum'
import { EPageHref, EPageLabel } from '@/enum/page.enum'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'CAMSHOP',
  description: 'Cameras Online Shop',
  navItems: [
    {
      label: EPageLabel.Home,
      href: EPageHref.Home,
    },
    {
      label: EPageLabel.Cameras,
      href: EPageHref.Cameras,
    },
    {
      label: EPageLabel.Lenses,
      href: EPageHref.Lenses,
    },
    {
      label: EPageLabel.Film,
      href: EPageHref.Film,
    },
    {
      label: EPageLabel.Blog,
      href: EPageHref.Blog,
    },
    {
      label: EPageLabel.About,
      href: EPageHref.About,
    },
  ],
  navMenuItemsAuthed: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Cameras',
      href: '/cameras',
    },
    {
      label: 'Lens',
      href: '/lens',
    },
    {
      label: 'Film',
      href: '/film',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  navMenuItems: [
    {
      label: EPageLabel.Login,
      href: EPageHref.Login,
    },
    {
      label: EPageLabel.Home,
      href: EPageHref.Home,
    },
    {
      label: EPageLabel.Cameras,
      href: EPageHref.Cameras,
    },
    {
      label: EPageLabel.Lenses,
      href: EPageHref.Lenses,
    },
    {
      label: EPageLabel.Film,
      href: EPageHref.Film,
    },
    {
      label: EPageLabel.Blog,
      href: EPageHref.Blog,
    },
    {
      label: EPageLabel.About,
      href: EPageHref.About,
    },
  ],
  links: {
    github: ELink.Github,
    twitter: ELink.Twitter,
    facebook: ELink.Facebook,
    instagram: ELink.Instagram,
  },
}
