export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="container-shell pt-8 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-muted">
        <li>
          <a className="inline-flex min-h-10 items-center font-semibold hover:text-accent" href="/">
            Home
          </a>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.label}>
            <span aria-hidden>/</span>
            {item.href ? (
              <a className="inline-flex min-h-10 items-center font-semibold hover:text-accent" href={item.href}>
                {item.label}
              </a>
            ) : (
              <span aria-current="page" className="font-semibold text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
