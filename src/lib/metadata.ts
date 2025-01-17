import { Metadata } from "next";

// Update this URL to your production domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lumion.com";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex,
}: MetadataProps): Metadata {
  const siteTitle = "Lumion - Digital Solutions Agency";
  const siteDescription =
    "Transform your digital presence with Lumion. We craft innovative digital solutions that help businesses thrive in the modern world.";
  const siteImage = "/images/og-image.jpg";

  return {
    metadataBase: new URL(siteUrl),
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || siteDescription,
    openGraph: {
      title: title || siteTitle,
      description: description || siteDescription,
      images: [
        {
          url: image || siteImage,
          width: 1200,
          height: 630,
          alt: title || siteTitle,
        },
      ],
      siteName: siteTitle,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteTitle,
      description: description || siteDescription,
      images: [image || siteImage],
      creator: "@lumion",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    alternates: {
      canonical: siteUrl,
    },
  };
} 