export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(siteUrl: string, path = "/") {
  const normalizedSite = siteUrl.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedSite}${normalizedPath}`;
}

export function isConfigured(value?: string) {
  return Boolean(value?.trim());
}
