import { Desktop, Mobile } from "."

export function Home(){
    return (
            <section id="home" className="min-h-screen pt-7">
                <div className="hidden lg:block">
                    <Desktop />
                </div>
                <div className="lg:hidden block">
                    <Mobile />
                </div>            
            </section>
        )
}