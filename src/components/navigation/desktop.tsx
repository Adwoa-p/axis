import { pages } from ".";

export function Desktop() {
  return (
    <nav className="flex gap-3 pr-4">
      {
        pages.map((page) => (
          <a href={page.link} key={page.name} className="active:text-primary hover:text-primary">{page.name}</a>
        ))
      }
    </nav>
  )
}