export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(siteUrl: string, path = "/") {
  const normalizedSite = siteUrl.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedSite}${normalizedPath}`;
}

export function withTrailingSlash(path: string) {
  if (!path || path === "/") return "/";
  const [pathname, suffix = ""] = path.split(/(?=[?#])/);
  if (/\.[a-z0-9]+$/i.test(pathname)) return path;
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return `${normalizedPath}${suffix}`;
}

export function canonicalUrl(siteUrl: string, path = "/") {
  return absoluteUrl(siteUrl, withTrailingSlash(path));
}

export function isConfigured(value?: string) {
  return Boolean(value?.trim());
}
