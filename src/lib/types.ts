/**
 * Type Definitions for Site Configuration
 */

export interface SocialLinks {
  twitter?: string;
  github?: string;
  discord?: string;
}

export interface LegalConfig {
  privacyEmail: string;
  legalEmail: string;
  lastUpdated: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  logo: string;
  ogImage: string;
  legal: LegalConfig;
  social: SocialLinks;
}

/** Pricing plan configuration for PricingTable component */
export interface PricingPlan {
  /** Plan name (e.g., "Free", "Pro", "Enterprise") */
  name: string;
  /** Monthly price in dollars (null for custom pricing) */
  monthlyPrice: number | null;
  /** Custom price text for enterprise plans (e.g., "Custom", "Contact us") */
  customPrice?: string;
  /** Short description of the plan */
  description: string;
  /** List of features included in the plan */
  features: string[];
  /** Whether to highlight this plan as recommended */
  highlighted?: boolean;
  /** Badge text override (default: "Most Popular" for highlighted) */
  badge?: string;
  /** Call-to-action button configuration */
  cta: { label: string; href: string };
}
