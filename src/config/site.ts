/**
 * Site Configuration
 *
 * @description
 * Core site metadata and branding settings.
 * These values can be customized via environment variables or by editing the defaults below.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

/** Site name displayed in header, footer, and meta tags */
export const name = import.meta.env.SITE_NAME || 'Mikrom';

/** Site description for SEO and meta tags */
export const description =
  import.meta.env.SITE_DESCRIPTION || 'Plataforma de microservicios ultrarrápidos basada en Firecracker microVMs y Go.';

/** Production URL of your site (used for sitemap, RSS, canonical URLs) */
export const url = import.meta.env.SITE_URL || 'https://www.mikrom.es';

/** Author name for meta tags and copyright */
export const author = import.meta.env.SITE_AUTHOR || 'Antonio Pardo';

/** Path to logo file (relative to /public) */
export const logo = '/logo.png';

/** Path to Open Graph image (relative to /public) */
export const ogImage = '/images/og-image.png';

/** Social media links */
export const social: SocialLinks = {
  twitter: 'https://twitter.com/mikrom',
  github: 'https://github.com/spluca/mikrom',
  discord: 'https://discord.gg/mikrom',
};

/** Legal configuration for privacy policy and terms pages */
export const legal: LegalConfig = {
  privacyEmail: 'privacy@mikrom.es',
  legalEmail: 'legal@mikrom.es',
  lastUpdated: 'February 12, 2026',
};
