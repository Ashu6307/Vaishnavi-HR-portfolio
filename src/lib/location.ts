export function locationToPostalAddress(location: string) {
  const [locality, region] = location.split(",").map((part) => part.trim()).filter(Boolean);

  return {
    "@type": "PostalAddress",
    addressLocality: locality || location,
    addressRegion: region,
    addressCountry: "IN"
  };
}
