import { sanityClient } from "./sanity/client";
import {
	HERO_QUERY,
	ABOUT_QUERY,
	SERVICES_QUERY,
	CLIENT_LOGOS_QUERY,
	CONTACT_QUERY,
	SITE_SETTINGS_QUERY,
} from "./sanity/queries";
import {
	HERO_CONTENT,
	ABOUT_CONTENT,
	SERVICES_CONTENT,
	CLIENT_LOGOS_CONTENT,
	CONTACT_CONTENT,
	NAV_CONTENT,
	FOOTER_CONTENT,
} from "./content";

// ── Types ───────────────────────────────────────────────────────────────

type HeroContent = typeof HERO_CONTENT;
type AboutContent = typeof ABOUT_CONTENT;
type ServicesContent = typeof SERVICES_CONTENT;
type ClientLogosContent = typeof CLIENT_LOGOS_CONTENT;
type ContactContent = typeof CONTACT_CONTENT;

export interface SiteSettings {
	brandName: string;
	brandTagline: string;
	footerDescription: string;
	ctaLabel: string;
	ctaHref: string;
	socialLinks: { name: string; href: string }[];
	newsletterTitle: string;
	newsletterDescription: string;
	copyright: string;
	signature: string;
}

// ── Helpers ─────────────────────────────────────────────────────────────

function sanityHeroToContent(data: Record<string, unknown>): HeroContent {
	return {
		badge: (data.badge as string) || HERO_CONTENT.badge,
		heading: {
			line1: (data.headingLine1 as string) || HERO_CONTENT.heading.line1,
			line2: (data.headingLine2 as string) || HERO_CONTENT.heading.line2,
			highlight: (data.headingHighlight as string) || HERO_CONTENT.heading.highlight,
		},
		description: {
			intro: (data.descriptionIntro as string) || HERO_CONTENT.description.intro,
			name: (data.descriptionName as string) || HERO_CONTENT.description.name,
			text: (data.descriptionText as string) || HERO_CONTENT.description.text,
			continuation: (data.descriptionContinuation as string) || HERO_CONTENT.description.continuation,
		},
		cta: {
			primary: {
				label: (data.primaryCtaLabel as string) || HERO_CONTENT.cta.primary.label,
				href: (data.primaryCtaHref as string) || HERO_CONTENT.cta.primary.href,
			},
			secondary: {
				label: (data.secondaryCtaLabel as string) || HERO_CONTENT.cta.secondary.label,
				href: (data.secondaryCtaHref as string) || HERO_CONTENT.cta.secondary.href,
			},
		},
		scrollIndicator: {
			label: (data.scrollIndicatorLabel as string) || HERO_CONTENT.scrollIndicator.label,
			href: HERO_CONTENT.scrollIndicator.href,
		},
		signature: (data.signature as string) || HERO_CONTENT.signature,
	} as unknown as HeroContent;
}

function sanityAboutToContent(data: Record<string, unknown>): AboutContent {
	return {
		badge: (data.badge as string) || ABOUT_CONTENT.badge,
		title: (data.title as string) || ABOUT_CONTENT.title,
		highlight: (data.highlight as string) || ABOUT_CONTENT.highlight,
		paragraphs: (data.paragraphs as string[]) || [...ABOUT_CONTENT.paragraphs],
		qualityBadge: {
			title: (data.qualityBadgeTitle as string) || ABOUT_CONTENT.qualityBadge.title,
			description: (data.qualityBadgeDescription as string) || ABOUT_CONTENT.qualityBadge.description,
		},
		stats: (data.stats as { value: string; label: string }[]) || [...ABOUT_CONTENT.stats],
		signature: (data.signature as string) || ABOUT_CONTENT.signature,
	} as unknown as AboutContent;
}

function sanityServicesToContent(data: Record<string, unknown>): ServicesContent {
	return {
		badge: (data.badge as string) || SERVICES_CONTENT.badge,
		title: (data.title as string) || SERVICES_CONTENT.title,
		highlight: (data.highlight as string) || SERVICES_CONTENT.highlight,
		description: (data.description as string) || SERVICES_CONTENT.description,
		primaryCta: {
			label: (data.primaryCtaLabel as string) || SERVICES_CONTENT.primaryCta.label,
			href: (data.primaryCtaHref as string) || SERVICES_CONTENT.primaryCta.href,
		},
		offers: (data.offers as ServicesContent["offers"]) || [...SERVICES_CONTENT.offers],
	} as unknown as ServicesContent;
}

function sanityClientLogosToContent(data: Record<string, unknown>): ClientLogosContent {
	return {
		badge: (data.badge as string) || CLIENT_LOGOS_CONTENT.badge,
		title: (data.title as string) || CLIENT_LOGOS_CONTENT.title,
		highlight: (data.highlight as string) || CLIENT_LOGOS_CONTENT.highlight,
		description: (data.description as string) || CLIENT_LOGOS_CONTENT.description,
		brands: (data.brands as ClientLogosContent["brands"]) || [...CLIENT_LOGOS_CONTENT.brands],
	} as unknown as ClientLogosContent;
}

function sanityContactToContent(data: Record<string, unknown>): ContactContent {
	// Only override the editable text fields; keep form structure from code
	const base = { ...CONTACT_CONTENT } as unknown as Record<string, unknown>;
	return {
		...base,
		badge: (data.badge as string) || CONTACT_CONTENT.badge,
		title: (data.title as string) || CONTACT_CONTENT.title,
		highlight: (data.highlight as string) || CONTACT_CONTENT.highlight,
		description: (data.description as string) || CONTACT_CONTENT.description,
		form: {
			...CONTACT_CONTENT.form,
			submit: (data.submitLabel as string) || CONTACT_CONTENT.form.submit,
			success: (data.successMessage as string) || CONTACT_CONTENT.form.success,
			signature: (data.signature as string) || CONTACT_CONTENT.form.signature,
		},
	} as unknown as ContactContent;
}

// ── Public API ──────────────────────────────────────────────────────────

export async function getHeroContent(): Promise<HeroContent> {
	try {
		const data = await sanityClient.fetch(HERO_QUERY);
		if (data) return sanityHeroToContent(data);
		return HERO_CONTENT;
	} catch {
		return HERO_CONTENT;
	}
}

export async function getAboutContent(): Promise<AboutContent> {
	try {
		const data = await sanityClient.fetch(ABOUT_QUERY);
		if (data) return sanityAboutToContent(data);
		return ABOUT_CONTENT;
	} catch {
		return ABOUT_CONTENT;
	}
}

export async function getServicesContent(): Promise<ServicesContent> {
	try {
		const data = await sanityClient.fetch(SERVICES_QUERY);
		if (data) return sanityServicesToContent(data);
		return SERVICES_CONTENT;
	} catch {
		return SERVICES_CONTENT;
	}
}

export async function getClientLogosContent(): Promise<ClientLogosContent> {
	try {
		const data = await sanityClient.fetch(CLIENT_LOGOS_QUERY);
		if (data) return sanityClientLogosToContent(data);
		return CLIENT_LOGOS_CONTENT;
	} catch {
		return CLIENT_LOGOS_CONTENT;
	}
}

export async function getContactContent(): Promise<ContactContent> {
	try {
		const data = await sanityClient.fetch(CONTACT_QUERY);
		if (data) return sanityContactToContent(data);
		return CONTACT_CONTENT;
	} catch {
		return CONTACT_CONTENT;
	}
}

export async function getSiteSettings(): Promise<SiteSettings> {
	try {
		const data = await sanityClient.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY);
		if (data) return data;
	} catch {
		// fall through
	}
	// Fallback: merge NAV_CONTENT + FOOTER_CONTENT
	return {
		brandName: NAV_CONTENT.brand.name,
		brandTagline: NAV_CONTENT.brand.tagline,
		footerDescription: FOOTER_CONTENT.brand.description,
		ctaLabel: NAV_CONTENT.cta.label,
		ctaHref: NAV_CONTENT.cta.href,
		socialLinks: FOOTER_CONTENT.social.map((s) => ({ name: s.name, href: s.href })),
		newsletterTitle: FOOTER_CONTENT.newsletter.title,
		newsletterDescription: FOOTER_CONTENT.newsletter.description,
		copyright: FOOTER_CONTENT.copyright,
		signature: FOOTER_CONTENT.signature,
	};
}
