import { groq } from "next-sanity";

// Shared projection for blog posts
const blogPostFields = `
    "id": _id,
    "slug": slug.current,
    category,
    title,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    date,
    readTime,
    "tags": coalesce(tags, []),
    "likes": coalesce(likes, 0),
    "comments": coalesce(comments[] {
      "id": _key,
      author,
      avatar,
      content,
      date
    }, []),
    "author": {
      "name": authorName,
      "role": authorRole,
      "avatar": authorAvatar
    },
    "relatedPostSlugs": coalesce(relatedPostSlugs, []),
    type,
    videoUrl
`;

// Blog Posts
export const ALL_POSTS_QUERY = groq`
  *[_type == "blogPost"] | order(date desc) {
    ${blogPostFields}
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${blogPostFields}
  }
`;

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[_type == "blogPost" && category == $category] | order(date desc) {
    ${blogPostFields}
  }
`;

// Case Studies
const caseStudyFields = `
    "id": _id,
    "slug": slug.current,
    client,
    industry,
    isAnonymized,
    goal,
    offer,
    role,
    duration,
    "constraints": coalesce(constraints, []),
    "whatWasDone": coalesce(whatWasDone, []),
    "deliverables": coalesce(deliverables, []),
    "copyExcerpts": coalesce(copyExcerpts[] {
      headline,
      body,
      cta,
      notes
    }, []),
    "results": coalesce(results[] {
      type,
      metric,
      value,
      description
    }, []),
    "topResults": coalesce(topResults, []),
    "coverImage": coverImage.asset->url,
    date,
    "tags": coalesce(tags, [])
`;

export const ALL_CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudy"] | order(date desc) {
    ${caseStudyFields}
  }
`;

export const CASE_STUDY_BY_SLUG_QUERY = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    ${caseStudyFields}
  }
`;

// Testimonials
export const ALL_TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"] | order(order asc) {
    "id": _id,
    name,
    role,
    company,
    content,
    rating,
    avatar
  }
`;

// ── Singleton Page Sections ─────────────────────────────────────────────

export const HERO_QUERY = groq`*[_id == "heroSection"][0]`;
export const ABOUT_QUERY = groq`*[_id == "aboutSection"][0]`;
export const SERVICES_QUERY = groq`*[_id == "servicesSection"][0]`;
export const CLIENT_LOGOS_QUERY = groq`*[_id == "clientLogosSection"][0]`;
export const CONTACT_QUERY = groq`*[_id == "contactSection"][0]`;
export const SITE_SETTINGS_QUERY = groq`*[_id == "siteSettings"][0]`;
