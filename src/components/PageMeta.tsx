import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  description: string
  canonicalPath: string
  ogTitle?: string
  ogDescription?: string
}

const siteUrl = 'https://mypot.kr'
const ogImage = `${siteUrl}/assets/app-logo.webp`

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)

  if (element) {
    element.setAttribute(attribute, value)
  }
}

export function PageMeta({ title, description, canonicalPath, ogTitle, ogDescription }: PageMetaProps) {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${canonicalPath}`
    const resolvedOgTitle = ogTitle ?? title
    const resolvedOgDescription = ogDescription ?? description

    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', canonicalUrl)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)
    setMeta('meta[property="og:title"]', 'content', resolvedOgTitle)
    setMeta('meta[property="og:description"]', 'content', resolvedOgDescription)
    setMeta('meta[property="og:image"]', 'content', ogImage)
    setMeta('meta[name="twitter:title"]', 'content', resolvedOgTitle)
    setMeta('meta[name="twitter:description"]', 'content', resolvedOgDescription)
    setMeta('meta[name="twitter:image"]', 'content', ogImage)
  }, [canonicalPath, description, ogDescription, ogTitle, title])

  return null
}
