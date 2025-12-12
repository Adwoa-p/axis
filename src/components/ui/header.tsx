
const pages = [
    {
        name: "Home",
        link: "#home"
    },
     {
        name: "About",
        link: "#about"
    },
     {
        name: "Audience",
        link: "#audience"
    },
     {
        name: "Faqs",
        link: "#faqs"
    },
     {
        name: "Testimonials",
        link: "#testimonials"
    },
     {
        name: "Join Us",
        link: "#join"
    }
]

export function Header() {
  return (
    <header className="flex items-center justify-between border-b shadow-sm sticky top-0 bg-white opacity-90 backdrop-blur-2xl p-2">
        <div className="size-13 rounded-full pt-2 flex font-semibold items-center">
            <img src="icon.png" alt="logo"/>
            Axis
        </div>
        <nav className="flex gap-3 pr-4">
            {
        pages.map((page) => (
            <a href={page.link} key={page.name} className="active:text-primary hover:text-primary">{page.name}</a>
        ))
      }
        </nav>
    </header>
  )
}


