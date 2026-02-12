/**
 * Configuration Index
 *
 * @description
 * Central export point for all site configuration.
 * Import from '@/config' to access the merged siteConfig object,
 * or import individual configs for specific needs.
 */

// Re-export individual configs for granular imports
export * from './site';

// Re-export types for convenience
export type {
  SocialLinks,
  LegalConfig,
  SiteConfig,
} from '../lib/types';

// Import individual configs to build merged object
import { name, description, url, author, logo, ogImage, social, legal } from './site';

import type { SiteConfig } from '../lib/types';

/**
 * Merged site configuration object
 */
export const siteConfig: SiteConfig = {
  name,
  description,
  url,
  author,
  logo,
  ogImage,
  social,
  legal,
};
