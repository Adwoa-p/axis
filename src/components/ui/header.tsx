
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
    <header>
        <nav>
            {
        pages.map((page) => (
            <a href={page.link} key={page.name}>{page.name}</a>
        ))
      }
        </nav>
    </header>
  )
}


