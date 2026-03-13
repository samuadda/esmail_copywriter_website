import { groq } from "next-sanity";

// Blog Posts
export const ALL_POSTS_QUERY = groq`
  *[_type == "blogPost"] | order(date desc) {
    "id": _id,
    "slug": slug.current,
    category,
    title,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    date,
    readTime,
    tags,
    likes,
    comments[] {
      "id": _key,
      author,
      avatar,
      content,
      date
    },
    "author": {
      "name": authorName,
      "role": authorRole,
      "avatar": authorAvatar
    },
    relatedPostSlugs,
    type,
    videoUrl
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    category,
    title,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    date,
    readTime,
    tags,
    likes,
    comments[] {
      "id": _key,
      author,
      avatar,
      content,
      date
    },
    "author": {
      "name": authorName,
      "role": authorRole,
      "avatar": authorAvatar
    },
    relatedPostSlugs,
    type,
    videoUrl
  }
`;

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[_type == "blogPost" && category == $category] | order(date desc) {
    "id": _id,
    "slug": slug.current,
    category,
    title,
    excerpt,
    content,
    "coverImage": coverImage.asset->url,
    date,
    readTime,
    tags,
    likes,
    comments[] {
      "id": _key,
      author,
      avatar,
      content,
      date
    },
    "author": {
      "name": authorName,
      "role": authorRole,
      "avatar": authorAvatar
    },
    relatedPostSlugs,
    type,
    videoUrl
  }
`;

// Case Studies
export const ALL_CASE_STUDIES_QUERY = groq`
  *[_type == "caseStudy"] | order(date desc) {
    "id": _id,
    "slug": slug.current,
    client,
    industry,
    isAnonymized,
    goal,
    offer,
    role,
    duration,
    constraints,
    whatWasDone,
    deliverables,
    copyExcerpts[] {
      headline,
      body,
      cta,
      notes
    },
    results[] {
      type,
      metric,
      value,
      description
    },
    topResults,
    "coverImage": coverImage.asset->url,
    date,
    tags
  }
`;

export const CASE_STUDY_BY_SLUG_QUERY = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    client,
    industry,
    isAnonymized,
    goal,
    offer,
    role,
    duration,
    constraints,
    whatWasDone,
    deliverables,
    copyExcerpts[] {
      headline,
      body,
      cta,
      notes
    },
    results[] {
      type,
      metric,
      value,
      description
    },
    topResults,
    "coverImage": coverImage.asset->url,
    date,
    tags
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
