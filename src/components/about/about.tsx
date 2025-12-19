import { Desktop, Mobile } from "."
export function About(){
    return (
      <section className="bg-white min-h-screen pt-15" id="about">
            <div className="hidden lg:block">
                <Desktop />
            </div>
            <div className="lg:hidden block">
                <Mobile />
            </div>            
        </section>
    )
}