import { Desktop, Mobile } from ".";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b shadow-sm sticky top-0 bg-white opacity-90 backdrop-blur-2xl p-2">
        <div className="size-13 rounded-full pt-2 flex font-semibold items-center">
            <img src="icon.png" alt="logo"/>
            Axis
        </div>
      
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="lg:hidden block">
        <Mobile />
      </div>
    </header>
  )
}


