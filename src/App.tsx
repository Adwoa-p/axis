import { Home } from "./components/home";
import { Audience} from "./components/audience";
import { Header } from "./components/navigation";
import { About } from "./components/about";
import { Testimonial } from "./components/testimonials";
import { Faqs } from "./components/faqs";
import { Join} from "./components/join";
import { BookOpenIcon, PencilIcon, UserGroupIcon } from "@heroicons/react/16/solid";


function App() {

  return (
    <div className="overflow-x-hidden">
        <Header/>
      <main className="flex flex-col justify-center items-center gap-10 ">

      {/* Section 1 */}
        <Home />

      {/* Section 2 */}
        <About />

      {/* Section 3 */}
        <Audience />

      {/* Section 4 */}
        <Testimonial />

      {/* Section 5 */}
        <Faqs/>

      {/* Section 5 */}
        <Join/>

    </main>
    <footer className="bg-secondary text-secondary-foreground">
      <div className="flex items-center justify-between ">
            <div className="size-13  flex font-semibold items-center">
              <img src="icon.png" alt="logo"/>
                Axis
            </div>
            <div >
              Copyright 2026@Axis
            </div>
            <div className="flex flex-row gap-2 text-primary size-20">
              <BookOpenIcon />
              <PencilIcon />
              <UserGroupIcon />
            </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
